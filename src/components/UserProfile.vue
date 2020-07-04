<template>
    <div class="section bg-gray-400 h-screen pt-6">
        <div class="flex justify-center items-center">
            <div class="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white" data-aos="fade-up">
                <div class="mb-6">
                    <img class="w-full" v-bind:src="imageUrl"
                         v-bind:alt="fullName" />
                </div>
                <div class="text-center w-full">
                    <div class="mb-10">
                        <p class="tracking-wide uppercase text-lg font-bold">{{fullName}}</p>
                        <p class="text-gray-800 text-sm">{{username}}</p>
                    </div>
                </div>
                <div class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
                    <div class="posts">
                        <p class="text-lg">{{postsCount}}</p>
                        <p class="text-gray-600 text-sm">Posts</p>
                    </div>
                    <div class="followers">
                        <p class="text-lg">{{followers}}</p>
                        <p class="text-gray-600 text-sm">Followers</p>
                    </div>
                    <div class="following">
                        <p class="text-lg">{{following}}</p>
                        <p class="text-gray-600 text-sm">Following</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        data() {
            var userData = this.$store.getters.porfileData.user;
            return {
                imageUrl: userData.profile_pic_url_hd,
                username: userData.username,
                fullName: userData.full_name,
                postsCount: userData.edge_owner_to_timeline_media.count,
                followers: userData.edge_followed_by.count,
                following: userData.edge_follow.count
            }
        }
    }
</script>
