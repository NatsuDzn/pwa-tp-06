<template>
  <div v-if="post">
    Article {{ $route.params.id }}
    <h1>{{ post.title }}</h1>
    {{ post.body }}
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
