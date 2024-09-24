<template>
  <div class="login-container">
    <h2>Log in</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <label>Email or username</label>
        <input v-model="username" type="text" placeholder="Email or username" required />
      </div>
      <div class="input-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Password" required />
      </div>
      <div class="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" class="login-button">Log in</button>
    </form>
    <div class="signup-link">
      <p>Don't have an account? <a href="#" @click.prevent="$emit('switchToRegister')">Sign up</a></p>
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async login() {
      try {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);

        const response = await axios.post('http://localhost:8000/login/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.authStore.login(response.data.access_token);
        this.errorMessage = 'Logged in';
        this.$emit('close'); // Close the login modal or navigate as needed
      } catch (error) {
        this.errorMessage = 'Invalid email or password';
      }
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}

.input-group {
  margin-bottom: 16px;
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.input-group input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease;
}

.input-group input:focus {
  border-color: #1d9bf0;
  outline: none;
}

.forgot-password {
  text-align: right;
  margin-bottom: 24px;
}

.forgot-password a {
  font-size: 14px;
  color: #1d9bf0;
}

.login-button {
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #1d9bf0;
}

.signup-link {
  margin-top: 16px;
}

.signup-link p {
  font-size: 14px;
  color: #666;
}

.signup-link a {
  color: #ff0050;
  font-weight: 600;
}
</style>
  