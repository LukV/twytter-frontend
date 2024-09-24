// src/stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { jwtDecode as jwt_decode } from 'jwt-decode';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(!!localStorage.getItem('token'));
  const email = ref('');
  const firstName = ref('');
  const handle = ref('');

  function login(token) {
    localStorage.setItem('token', token);
    isLoggedIn.value = true;
    decodeToken(token);
  }

  function logout() {
    localStorage.removeItem('token');
    isLoggedIn.value = false;
    email.value = '';
    firstName.value = '';
    handle.value = '';
  }

  function decodeToken(token) {
    const decoded = jwt_decode(token);
    email.value = decoded.sub; // assuming the token contains an email in 'sub'
  }

  async function fetchUserProfile() {
    if (email.value) {
      try {
        const response = await axios.get(`http://localhost:8000/users/profile?email=${email.value}`);
        firstName.value = response.data.first_name;
        handle.value = response.data.handle;
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  }

  if (isLoggedIn.value) {
    const token = localStorage.getItem('token');
    if (token) {
      decodeToken(token);
      fetchUserProfile();
    }
  }

  return {
    isLoggedIn,
    email,
    firstName,
    handle,
    login,
    logout,
    fetchUserProfile,
  };
});
