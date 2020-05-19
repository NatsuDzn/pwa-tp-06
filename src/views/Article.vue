<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    };
  },

  created() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    ).then(response => {
      response.json().then(data => {
        this.post = data;
        console.log(data);
      });
    });
  }
};
</script>
