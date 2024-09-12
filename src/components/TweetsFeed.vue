<template>
    <div class="tweet">
      <div class="tweet-header">
        <img class="avatar" src="https://via.placeholder.com/50" alt="Avatar" />
        <div class="tweet-author-info">
          <span class="name">{{ post.author }}</span>
          <span class="handle">@{{ post.author.toLowerCase() }}</span>
          <i class="fas fa-check-circle verified-badge"></i>
          <span class="timestamp">{{ new Date(post.timestamp).toLocaleTimeString() }}</span>
        </div>
      </div>
      <div class="message">{{ post.message }}</div>
      <div class="tweet-footer">
        <i class="fas fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TweetsFeed',
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your tweet styles */
  </style>
  