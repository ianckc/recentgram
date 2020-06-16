<template>
  <div id="app">
    <SearchProfile />
    <div v-if="Object.keys(this.$store.getters.porfileData).length > 0">
      <UserProfile />
      <UserPost title="Most Recent" :post="mostRecentPost" />
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
    }
  }
}
</script>

<style>
</style>
