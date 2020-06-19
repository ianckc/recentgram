<template>
    <div class="section bg-gray-200 h-screen">
        <div class="container mx-auto h-full flex justify-center items-center">
            <form class="bg-white p-4 w-4/6 relative shadow-xl border-2">
                <input type="text" name="username" v-model="username" placeholder="Instagram username..." class="h-20 w-full text-xl md:text-2xl" />
                <button :disabled="username.length === 0" @click.prevent="searchProfile" class="h-20 rounded bg-gray-400 pl-10 pr-10 md:absolute md:right-0 md:mr-4">
                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
                </button>
                <div class="text-center pt-4 pb-4">
                    <div v-if="loading" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    <p v-if="this.error" class="text-red-400">An Instagram profile with that username could not be found</p>
                    <p v-if="this.profile">Scroll down to view the profile</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "SearchProfile",
        data: function () {
            return {
                error: false,
                profile: false,
                username: '',
                loading: false
            }
        },
        methods: {
            searchProfile() {
                this.loading = true;
                this.$store.commit('setProfileData', {});
                axios.get('https://www.instagram.com/' + this.username + '/?__a=1')
                    .then((response) => {
                        this.loading = false;
                        this.$store.commit('setProfileData', response.data.graphql);
                        this.error = false;
                        this.profile = true;
                    })
                    .catch((error) => {
                        this.loading = false;
                        this.error = error;
                        this.profile = false;
                    });
            }
        }
    }
</script>

<style scoped>
</style>
