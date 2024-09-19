<template>
    <div class="registration-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="register">
        <div class="input-group">
          <label>First Name</label>
          <input v-model="firstName" type="text" placeholder="First Name" required />
        </div>
        <div class="input-group">
          <label>Last Name</label>
          <input v-model="lastName" type="text" placeholder="Last Name" required />
        </div>
        <div class="input-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Email" required />
        </div>
        <div class="input-group">
          <label>Handle (Username)</label>
          <input v-model="handle" type="text" placeholder="Handle" required />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Password" required />
        </div>
        <button type="submit" class="register-button">Sign Up</button>
      </form>
      <div class="login-link">
        <p>Already have an account? <a href="#" @click.prevent="$emit('switchToLogin')">Log in</a></p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async register() {
        try {
          const payload = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            handle: this.handle,
            password: this.password,
          };
          
          await axios.post('http://localhost:8000/users', payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          this.$emit('switchToLogin'); // Switch to login after successful registration
        } catch (error) {
          this.errorMessage = 'Registration failed. Please try again.';
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
  
  .register-button {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 600;
    background-color: #1d9bf0;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .register-button:hover {
    background-color: #0056b3;
  }
  
  .login-link {
    margin-top: 16px;
  }
  
  .login-link p {
    font-size: 14px;
    color: #666;
  }
  
  .login-link a {
    color: #ff0050;
    font-weight: 600;
  }
  </style>
  