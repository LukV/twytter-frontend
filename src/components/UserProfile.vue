<template>
  <div class="user-profile">
    <i class="fas fa-user user-icon"></i>
    <div class="user-info">
      <h3>{{ displayName }}</h3>
      <p @click="logout" class="logout-link">Logout</p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  computed: {
    displayName() {
      if (this.authStore.firstName) {
        return `Hi ${this.authStore.firstName}`;
      } else if (this.authStore.handle) {
        return this.authStore.handle;
      } else {
        return this.authStore.email ? this.authStore.email.split('@')[0] : 'Unknown User';
      }
    },
  },
  methods: {
    logout() {
      this.authStore.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-icon {
  font-size: 2rem;
  color: #333;
}

.user-info {
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.logout-link {
  color: #1d9bf0;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 4px;
}

.logout-link:hover {
  text-decoration: underline;
}
</style>
  