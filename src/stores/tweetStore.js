import { defineStore } from 'pinia';

export const useTweetStore = defineStore('tweetStore', {
  state: () => ({
    newPost: {
      author: 'Walt Verhelst',
      message: ''
    },
    posts: []
  }),
  actions: {
    setMessage(message) {
      this.newPost.message = message;
    },
    async submitPost() {
      if (!this.newPost.message) {
        alert('Message cannot be empty!');
        return;
      }
      const response = await fetch('http://127.0.0.1:8000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newPost)
      });
      const data = await response.json();
      this.posts.unshift(data);
      this.newPost.message = ''; // Clear the message after submission
    },
    async fetchPosts() {
      const response = await fetch('http://127.0.0.1:8000/posts');
      const data = await response.json();
      this.posts = data.reverse();
    }
  }
});
