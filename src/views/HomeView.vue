<template>
    <main class="feed">
        <header>
            <h1><i class="fa fa-arrow-left"></i> Home</h1>
        </header>
        <TweetComposer />
        <div class="tabs">
            <button class="tab active" id="for-you-tab">For you</button>
            <button class="tab" id="following-tab">Following</button>
        </div>
        <div class="timeline">
            <TweetsFeed v-for="post in tweetStore.posts" :key="post.timestamp" :post="post" />
        </div>
    </main>
</template>

<script>
import { useTweetStore } from '../stores/tweetStore';
import TweetComposer from '../components/TweetComposer.vue';
import TweetsFeed from '../components/TweetsFeed.vue';

export default {
    name: 'HomeView',
    components: {
        TweetComposer,
        TweetsFeed,
    },
    setup() {
        const tweetStore = useTweetStore();
        tweetStore.fetchPosts(); // Fetch posts when the component is mounted
        return { tweetStore };
    },
};
</script>

<style>
/* Styles specific to the home view */
</style>
  