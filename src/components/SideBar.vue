<template>
  <nav class="sidebar">
    <div class="logo">R<span class="logo-o">o</span>b<span class="logo-o">oto</span></div>
    <ul>
      <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
      <li><a href="#"><i class="fas fa-hashtag"></i> Explore</a></li>
      <li><a href="#" class="small"><i class="fas fa-bell"></i> Notifications</a></li>
      <li><a href="#"><i class="fas fa-envelope"></i> Messages</a></li>
      <li><a href="#"><i class="fas fa-user"></i> Profile</a></li>
    </ul>
    
    <div v-if="isLoggedIn">
      <button class="post-button" @click="tweetStore.submitPost">Post</button>
    </div>
    
    <div class="login" v-else>
      <hr>
      <p>Log in to repost or comment. Let's take it back 🎶.</p>
      <button class="login-button" @click="showLoginModal = true">Login</button>
    </div>

    <!-- Login Modal Overlay -->
    <LoginOverlay v-if="showLoginModal" @close="showLoginModal = false" />
  </nav>
</template>

<script>
import { useTweetStore } from '../stores/tweetStore';
import LoginOverlay from './LoginOverlay.vue';  // Import the LoginOverlay component

export default {
  components: {
    LoginOverlay,  // Register the LoginOverlay component
  },
  setup() {
    const tweetStore = useTweetStore();
    return { tweetStore };
  },
  data() {
    return {
      showLoginModal: false,  // Control modal visibility
    };
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  padding: 25px;
  height: 100vh;
  position: sticky;
  top: 0;
}

.sidebar .logo {
  font-size: 250%;
  font-weight: bold;
  margin-bottom: 25px;
}

.sidebar .logo-o {
  font-family: 'VT323', monospace;
  font-size: 120%;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  margin-bottom: 20px;
}

.sidebar a {
  text-decoration: none;
  font-family: 'Andale mono', monospace;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
}

.sidebar .small {
  font-size: 0.9rem;
}

.sidebar a:hover {
  color: #1d9bf0;
}

.post-button {
  background-color: rgb(85, 72, 192);
  color: rgb(102, 248, 24);
  border: none;
  padding: 16px 18px; 
  border-radius: 25px;
  font-weight: bold; 
  font-size: 100%;
  cursor: pointer;
  margin-top: 20px;
  width: 80%;
}

.login p {
  color: #888;
  font-size: 90%;
}

.login hr {
  border: none;
  border-top: 1px solid gray;
  margin: 35px 0 15px;
}

.login-button {
  color:  rgb(85, 72, 192);
  background-color: white;
  border: 1px solid rgb(85, 72, 192);
  padding: 16px 18px; 
  border-radius: 15px;
  font-weight: bold; 
  font-size: 100%;
  cursor: pointer;
  margin-top: 20px;
  width: 80%;
}
</style>
