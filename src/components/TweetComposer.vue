<template>
  <section class="post-composer">
    <img :src="require('@/assets/user-1.png')" alt="User-1" class="profile-pic purple-border">
    <div class="post-form">
      <textarea v-model="tweetStore.newPost.message" class="post-textarea" placeholder="What's on your mind?"></textarea>
      <div class="post-media">
        <div class="icons">
          <a href="#"><i class="fas fa-video-camera"></i></a>
          <a href="#"><i class="fas fa-image"></i></a>
        </div>
        <button class="post-button" @click="tweetStore.submitPost">Post</button>
      </div>
    </div>
  </section>
</template>

  
  <script>
  import { useTweetStore } from '../stores/tweetStore';
  
  export default {
    setup() {
      const tweetStore = useTweetStore();
      return { tweetStore };
    }
  };
  </script>
  
<style scoped>
.post-composer {
  display: flex;
  align-items: flex-start;
}

.post-form {
  flex-grow: 1; 
}

.post-textarea {
  width: 100%; 
  background-color: rgb(237,237,237);
  border: 0px;
  border-radius: 10px; /* Rounded corners */
  padding: 10px;
  height: 100px;
  resize: none; /* Disable manual resizing */
  box-sizing: border-box; /* Include padding in width calculation */
}

.post-media {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-actions {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
}

.post-actions i {
  margin-right: 15px;
}

.post-button {
  background-color: rgb(85, 72, 192);
  color: rgb(102, 248, 24);
  border: none;
  padding: 12px 18px;
  font-weight: 600; 
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
}  
</style>
  