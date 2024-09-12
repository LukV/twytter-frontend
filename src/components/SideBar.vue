<template>
    <nav class="sidebar">
      <img src="https://abs.twimg.com/favicons/twitter.ico" alt="Twitter logo" class="twitter-logo" />
      <ul>
        <li><i class="fas fa-home"></i> Home</li>
        <li><i class="fas fa-hashtag"></i> Explore</li>
        <li><i class="fas fa-bell"></i> Notifications</li>
        <li><i class="fas fa-envelope"></i> Messages</li>
        <li><i class="fas fa-bookmark"></i> Bookmarks</li>
        <li><i class="fas fa-list"></i> Lists</li>
        <li><i class="fas fa-user"></i> Profile</li>
        <li><i class="fas fa-ellipsis-h"></i> More</li>
      </ul>
      <button class="tweet-button" @click="tweetStore.submitPost">Tweet</button>
    </nav>
  </template>
  
  <script>
  import { useTweetStore } from '../stores/tweetStore';
  
  export default {
    setup() {
      const tweetStore = useTweetStore();
      return { tweetStore };
    }
  };
  </script>
  
  <style scoped>
  /* Your sidebar styles */
  </style>
  