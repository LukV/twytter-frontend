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
  import { jwtDecode as jwt_decode } from 'jwt-decode';
  
  export default {
    name: 'UserProfile',
    data() {
      return {
        email: '',
        firstName: '',
        handle: '',
      };
    },
    computed: {
      displayName() {
        if (this.firstName) {
          return `Hi ${this.firstName}`;
        } else if (this.handle) {
          return this.handle;
        } else {
          // Extract username from email before @
          return this.email ? this.email.split('@')[0] : 'Unknown User';
        }
      },
    },
    mounted() {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwt_decode(token);
        this.email = decodedToken.sub; // Extract email from the token
        
        // Fetch user profile info (e.g., first name, handle)
        this.fetchUserProfile();
      }
    },
    methods: {
      async fetchUserProfile() {
        // Assuming you have an API endpoint to fetch user details based on the email from the token
        try {
          const response = await fetch(`http://localhost:8000/users/profile?email=${this.email}`);
          const data = await response.json();
          this.firstName = data.first_name;
          this.handle = data.handle;
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      },
      logout() {
        localStorage.removeItem('token'); // Remove token from storage
        this.$router.push('/login'); // Redirect to login page or homepage
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
  