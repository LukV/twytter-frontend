<template>
    <div class="overlay">
      <div class="modal">
        <!-- Change the close button to a left caret using Font Awesome -->
        <button class="close-btn" @click="$emit('close')">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <LoginForm v-if="showLogin" @switchToRegister="showLogin = false" />
        <RegistrationForm v-if="!showLogin" @switchToLogin="showLogin = true" />
      </div>
    </div>
  </template>
  
  <script>
  import LoginForm from './LoginForm.vue';
  import RegistrationForm from './RegistrationForm.vue';
  
  export default {
    data() {
      return {
        showLogin: true,
      };
    },
    components: {
      LoginForm,
      RegistrationForm,
    },
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    min-height: 500px;
  }
  
  .modal {
    background-color: white;
    border-radius: 16px;
    padding: 40px;
    width: 400px;
    max-width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: #333;
  }
  
  /* Adjust modal contents for mobile */
  @media (max-width: 768px) {
    .modal {
      width: 90%;
      padding: 30px;
    }
  }
  </style>
  