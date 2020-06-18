<template>
  <div id="app">
    <SearchProfile />
    <div v-if="Object.keys(this.$store.getters.porfileData).length > 0">
      <UserProfile />
      <UserPost title="Most Recent" :post="mostRecentPost" />
      <UserPost title="Most Liked" :post="mostLikedPost" />
    </div>
  </div>
</template>

<script>
import SearchProfile from "./components/SearchProfile";
import UserProfile from "./components/UserProfile";
import UserPost from "./components/UserPost";

export default {
  name: 'App',
  components: {
    UserPost,
    UserProfile,
    SearchProfile
  },
  computed: {
    mostRecentPost: function() {
      return this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges[0];
    },
    mostLikedPost: function() {
      var mostLikedKey = 0;
      var likesCount = 0;
      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item, index) {
        if (item.node.edge_liked_by.count > likesCount) {
          mostLikedKey = index;
        }
      });
      return this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges[mostLikedKey];
    },
  }
}
</script>

<style>
</style>
