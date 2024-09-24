// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'; 
import ExploreView from './views/ExploreView.vue';
import NotificationsView from './views/NotificationsView.vue';
import MessagesView from './views/MessagesView.vue';
import ProfileView from './views/ProfileView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeView,
  },
  {
    path: '/explore',
    component: ExploreView,
  },
  {
    path: '/notifications',
    component: NotificationsView,
  },
  {
    path: '/messages',
    component: MessagesView,
  },
  {
    path: '/profile',
    component: ProfileView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
