<template>
  <section class="post">
    <div class="post-user">
      <img :src="require('@/assets/user-2.png')" alt="User" class="profile-pic brown-border">
      <div class="user-info">
        <h3>@{{ post.author.toLowerCase() }}</h3>
        <p>{{ new Date(post.timestamp).toLocaleTimeString() }}</p>
      </div>
    </div>
    <div class="post-content">
      <p>{{ post.message }}</p>
    </div>
    <div class="post-actions">
      <i class="fas fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </section>
</template>
  
<script>
export default {
  name: 'TweetsFeed',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.post {
  padding: 20px 0px;
  border-bottom: 1px solid #e6e6e6;
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
</style>