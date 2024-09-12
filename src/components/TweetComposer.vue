<template>
    <div class="tweet-composer">
      <img class="avatar" src="https://via.placeholder.com/50" alt="Avatar" />
      <textarea v-model="tweetStore.newPost.message" placeholder="What's happening?" />
      <div>
        <button class="composer-tweet-button" @click="tweetStore.submitPost">Tweet</button>
        <div class="tweet-options">
          <i class="fas fa-image"></i>
          <i class="fas fa-gift"></i>
          <i class="fas fa-chart-bar"></i>
          <i class="fas fa-smile"></i>
        </div>
      </div>
    </div>
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
  /* Your tweet composer styles */
  </style>
  