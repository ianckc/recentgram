<template>
  <div id="app">
    <SearchProfile />
    <div v-if="Object.keys(this.$store.getters.porfileData).length > 0">
      <UserProfile />
      <UserPost title="Most Recent" :postKey="mostRecentPost" />
      <div v-for="(postKey, index) in mostLikedPost" :key="postKey">
        <UserPost v-if="index == 0" title="Most Liked" :postKey="postKey" />
        <UserPost v-if="index > 0" title="Most Liked" :postKey="postKey" />
      </div>
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
      return 0;
    },
    mostLikedPost: function() {
      var mostLikedKeys = [];
      var likesCount = 0;
      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item) {
        if (item.node.edge_liked_by.count > likesCount) {
            likesCount = item.node.edge_liked_by.count;
        }
      });
      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item, index) {
        if (item.node.edge_liked_by.count == likesCount) {
          mostLikedKeys.push(index);
        }
      });
      return mostLikedKeys;
    },
  }
}
</script>

<style>
</style>
