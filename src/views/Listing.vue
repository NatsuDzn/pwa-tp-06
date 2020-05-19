<template>
  <div class="list">
    <Heading />
    <div class="content">
      <h2>Nos critiques</h2>
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="`/article/${post.id}`">
          <div>
            <div class="landing__card">
              <img
                class="landing__card--img"
                :style="{
                  backgroundImage:
                    'url(' + require('@/assets/img/bowl.png') + ')'
                }"
              />
              <div class="landing__card--text">
                <h3>{{ post.title }}</h3>
                <span>
                  <p>{{ post.rank }}</p>
                  <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                  <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                  <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                  <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                  <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                </span>
              </div>
            </div>
          </div>
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
        console.log(data);
      });
    });
  }
};
</script>

<style lang="scss">
.list {
  .content {
        padding: 1rem;
    h2 {
      font-size: 14px;
      line-height: 21px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
      margin: 0.75rem 0;
    }
  }
}
</style>
