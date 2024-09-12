<template>
  <div id="app">
    <div class="container">
      <div class="layout">
        <SideBar />
        <main class="feed">
          <div class="feed-header">
            <h2>Home</h2>
          </div>
          <TweetComposer />
          <div class="timeline">
            <TweetsFeed v-for="post in tweetStore.posts" :key="post.timestamp" :post="post" />
          </div>
        </main>
        <aside class="right-sidebar">
          <TrendingTags />
          <SuggestedFollows />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { useTweetStore } from './stores/tweetStore';
import SideBar from './components/SideBar.vue';
import TweetComposer from './components/TweetComposer.vue';
import TweetsFeed from './components/TweetsFeed.vue';
import TrendingTags from './components/TrendingTags.vue';
import SuggestedFollows from './components/SuggestedFollows.vue';

export default {
  components: {
    SideBar,
    TweetComposer,
    TweetsFeed,
    TrendingTags,
    SuggestedFollows
  },
  setup() {
    const tweetStore = useTweetStore();
    tweetStore.fetchPosts(); // Fetch posts when the component is mounted
    return { tweetStore };
  }
};
</script>

<style>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: white; /* Page background set to white */
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Layout */
.layout {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

/* Container for layout with max-width and min-width */
.container {
  max-width: 1200px;  /* Maximum width */
  min-width: 800px;   /* Minimum width */
  margin: 0 auto;     /* Center the container */
  padding: 0 20px;    /* Add some padding for smaller screens */
}

/* Sidebar Navigation */
.sidebar {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.twitter-logo {
  width: 40px;
  height: 40px;
  margin: 20px;
}

.sidebar ul {
  list-style: none;
  margin-left: 22px;
}

.sidebar ul li {
  padding: 12px 0;
  font-size: 18px;
  cursor: pointer;
}

.sidebar ul li:hover {
  color: #1da1f2;
}

.tweet-button {
  background-color: #1da1f2;
  color: white;
  border: none;
  padding: 16px 18px; 
  border-radius: 25px;
  font-weight: bold; 
  font-size: 100%;
  cursor: pointer;
  margin-top: 20px;
}

.tweet-button:hover {
  background-color: #1991db;
}

/* Feed (Timeline) */
.feed {
  width: 55%;
  margin: 0 20px; /* Add extra margin around the feed */
}

.feed-header {
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e8ed;
}

.tweet-composer {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #e1e8ed;
}

.tweet-composer img.avatar {
  border-radius: 50%;
  margin-right: 10px;
}

.tweet-composer textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  resize: none;
  font-size: 16px;
}

.tweet-options {
  display: flex;
  gap: 20px;
  margin-left: 15px;
}

.composer-tweet-button {
  background-color: #1da1f2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px;
}

.composer-tweet-button:hover {
  background-color: #1991db;
}

/* Tweet (Post) */
.timeline .tweet {
  background-color: white;
  border: 1px solid #e1e8ed;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.tweet-header {
  display: flex;
  align-items: center;
}

.tweet-header img.avatar {
  border-radius: 50%;
  margin-right: 10px;
}

.tweet-author-info {
  display: flex;
  align-items: center;
}

.name {
  font-weight: bold;
}

.handle {
  color: #657786;
  margin-left: 5px;
}

.verified-badge {
  color: #1da1f2;
  margin-left: 5px;
}

.timestamp {
  margin-left: 10px;
  font-size: 12px;
  color: #657786;
}

.message {
  margin: 0px 0px 10px 60px;
}

.tweet-footer {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: #657786;
}

/* Right Sidebar (Trends, Who to Follow) */
.right-sidebar {
  width: 25%;
}

.trends,
.who-to-follow {
  background-color: #f5f8fa; /* Background color for trends and who to follow */
  border: 1px solid #e1e8ed;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.trends h3,
.who-to-follow h3 {
  margin-bottom: 10px;
}

.trends ul {
  list-style: none;
}

.trends ul li {
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
}

.follow-suggestion {
  display: flex;
  align-items: center;
}

.follow-suggestion img.avatar {
  border-radius: 50%;
  margin-right: 10px;
}

.follow-button {
  background-color: #1da1f2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
}

.follow-button:hover {
  background-color: #1991db;
}
</style>

