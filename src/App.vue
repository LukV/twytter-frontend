<template>
  <div id="app">
    <div class="container">
      <SideBar /> <!-- Sidebar will remain static -->
      <!-- Dynamic content based on the current route -->
      <router-view />
      <!-- Right Sidebar (Optional for trends, etc.) -->
      <aside class="sidebar-right">
        <UserProfile />
        <TrendingTags />
        <SuggestedFollows />
      </aside>

      <!-- Conditionally show modals based on current route -->
      <LoginOverlay v-if="currentRoute === 'login'" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import SideBar from './components/SideBar.vue';
import TrendingTags from './components/TrendingTags.vue';
import SuggestedFollows from './components/SuggestedFollows.vue';
import UserProfile from './components/UserProfile.vue';
import LoginOverlay from './components/LoginOverlay.vue';

export default {
  components: {
    SideBar,
    TrendingTags,
    SuggestedFollows,
    UserProfile,
    LoginOverlay
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const closeModal = () => {
      router.push('/home'); // Close the modal by redirecting to home
    };

    return {
      currentRoute: route.meta.showModal,
      closeModal
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', 'Inter', sans-serif;
  color: rgb(44, 44, 44)
}

.container {
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}

/* Feed section */
.feed {
  width: 600px;
  padding: 20px;
  background-color: #ffffff;
}

.feed header {
  padding: 15px 0 25px;
}

.feed h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.tabs {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.tab {
  background-color: transparent;
  margin-right: 20px;
  padding: 10px 20px;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #555;
  transition: border-bottom 0.3s ease, color 0.3s ease;
}

.tab:hover {
  color: #5548c0 
}

.tab.active {
  border-bottom: 5px solid; 
}

/* TODO: move below CSS to components */

.icons i {
  margin-right: 10px; 
}

.icons a {
  color: rgb(44, 44, 44)
}

.post-user, .user-profile {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 70px;
  height: 70px;
  border-radius: 40%;
  margin-right: 10px;
  border: 3px solid;
}

.purple-border {
  border-color: rgb(85, 72, 192)
}

.brown-border {
  border-color: rgb(192, 141, 115);
}

.pink-border {
  border-color: rgb(234, 108, 122);
}

.user-info h3 {
  font-size: 1rem;
  font-weight: 600;
}

.user-info p {
  font-size: 0.85rem;
  color: #888;
}

.post-content p {
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
}

/* Right sidebar */
.sidebar-right {
  width: 250px;
  padding: 20px;
}

.user-profile {
  margin-top:20px;
}

.sidebar-right section {
  border: 1px solid  rgb(192, 141, 115);
  border-radius: 25px;
  padding: 15px;
  margin: 25px 0;
}

.sidebar-right h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.sidebar-right ul {
  list-style: none;
}

.sidebar-right li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: rgb(151, 151, 151)
}
</style>

