<template>
    <div class="section bg-blue-100 pt-12 pb-12">
        <div class="text-center">
            <h2 class="text-3xl mb-4">{{title}}</h2>
        </div>
        <div class="md:flex w-9/12 lg:w-1/2 mx-auto bg-white" data-aos="fade-up">
            <div class="md:flex-shrink-0">
                <img class="w-full" v-bind:src="post.node.thumbnail_src" v-bind:alt="post.node.accessibility_caption" />
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
                <div class="p-2">
                    <p class="text-sm text-gray-600 mb-2">{{post.node.taken_at_timestamp | moment('Do MMMM YYYY')}}</p>
                    <p>{{post.node.edge_media_to_caption.edges[0].node.text}}</p>
                </div>
            </div>
        </div>
        <!--<div class="py-10 px-6 text-center tracking-wide grid grid-cols-2 gap-6 bg-white">-->
        <div class="bg-white w-9/12 lg:w-1/2 mx-auto grid grid-cols-2 text-center pt-4 pb-4">
            <div class="lg:w-6/12 mx-auto">
                <p class="text-lg text-gray-600">{{post.node.edge_liked_by.count}}</p>
                <p class="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mx-auto">
                        <path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/>
                    </svg>
                </p>
            </div>
            <div class="lg:w-6/12 mx-auto">
                <p class="text-lg text-gray-600">{{post.node.edge_media_to_comment.count}}</p>
                <p class="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mx-auto">
                        <path class="heroicon-ui" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"/>
                    </svg>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserPost",
        props: {
            title: String,
            post: Object,
        }
    }
</script>

<style scoped>

</style>
