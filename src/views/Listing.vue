<template>
  <div class="about">
    <Heading />
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="`/article/${post.id}`">
          {{ post.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
  components: {
    Heading
  },

  data() {
    return {
      posts: null
    };
  },

  created() {
    fetch(
      "https://raw.githubusercontent.com/NatsuDzn/pwa-tp-oishi/master/public/data/articles.json"
    ).then(response => {
      response.json().then(data => {
        this.posts = data;
      });
    });
  }
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  padding: 10px;
  border: 1px solid black;
  margin: 5px auto;
}
</style>
