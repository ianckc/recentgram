<template>
  <div id="app">
    <SearchProfile />
    <div v-if="Object.keys(this.$store.getters.porfileData).length > 0">
      <UserProfile />
    </div>
  </div>
</template>

<script>
import SearchProfile from "./components/SearchProfile";
import UserProfile from "./components/UserProfile";

export default {
  name: 'App',
  components: {
    UserProfile,
    SearchProfile
  }
}
</script>

<style>
</style>
