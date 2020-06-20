<template>
  <div id="app">
    <SearchProfile />
    <div v-if="Object.keys(this.$store.getters.porfileData).length > 0">
      <UserProfile />
      <UserPost title="Most Recent" :postKey="mostRecentPost" />
      <div v-for="(postKey, index) in mostLikedPosts" :key="postKey">
        <UserPost v-if="index == 0" title="Most Liked" :postKey="postKey" backgroundClass="bg-light-brown" />
        <UserPost v-if="index > 0" :postKey="postKey" />
      </div>
      <div v-for="(postKey, index) in mostCommentedPosts" :key="postKey">
        <UserPost v-if="index == 0" title="Most Commented On" :postKey="postKey" backgroundClass="bg-brown" />
        <UserPost v-if="index > 0" :postKey="postKey" />
      </div>
      <div v-for="(postKey, index) in otherPosts" :key="postKey">
        <UserPost v-if="index == 0" title="Other Posts" :postKey="postKey" />
        <UserPost v-if="index > 0" :postKey="postKey" />
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
    mostLikedPosts: function() {
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
    mostCommentedPosts: function() {
      var mostCommentedKeys = [];
      var commentsCount = 0;
      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item) {
        if (item.node.edge_media_to_comment.count > commentsCount) {
          commentsCount = item.node.edge_media_to_comment.count;
        }
      });
      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item, index) {
        if (item.node.edge_media_to_comment.count == commentsCount) {
          mostCommentedKeys.push(index);
        }
      });
      return mostCommentedKeys;
    },
    otherPosts: function() {

      var mostLikedKeys = this.mostLikedPosts;
      var mostCommentedKeys = this.mostCommentedPosts;
      var postsToRemove = mostLikedKeys.concat(mostCommentedKeys);
      postsToRemove.push(0);

      var otherPostKeys = [];

      this.$store.getters.porfileData.user.edge_owner_to_timeline_media.edges.forEach(function (item, index) {
        if (!postsToRemove.includes(index)) {
          otherPostKeys.push(index);
        }
      });

      return otherPostKeys;
    }
  }
}
</script>

<style>
</style>
