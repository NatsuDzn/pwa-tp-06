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
                :style="{ backgroundImage: `url(${post.articleImg})` }"
              />
              <div class="landing__card--text">
                <h3>{{ post.title }}</h3>
                <span>
                  <p>{{ post.rank }}</p>
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="desktop-card">
        <div class="card-m" v-for="post in posts" :key="post.id">
          <router-link :to="`/article/${post.id}`">
            <div class="card-m__container">
              <div
                class="card-m__container--img"
                :style="{ backgroundImage: `url(${post.articleImg})` }"
              ></div>
              <div>
                <h3>{{ post.title }}</h3>
                <p>{{ post.rank }}</p>
              </div>
            </div>
          </router-link>
        </div>
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
    fetch("https://my-json-server.typicode.com/NatsuDzn/demo/posts").then(
      response => {
        response.json().then(data => {
          this.posts = data;
          console.log(data);
        });
      }
    );
  }
};
</script>

<style lang="scss">
@import "../assets/scss/misc/mixins.scss";

.list {
  .content {
    padding: 1rem;
    padding-bottom: 65px;
    animation: fadeIn 0.75s ease-in-out;

    @media only screen and (min-width: 768px) {
      padding: 6rem;
    }
    h2 {
      font-size: 14px;
      line-height: 21px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
      margin: 0.75rem 0;

      @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: normal;
      }
    }
  }
}

.card {
  display: flex;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  div {
    width: 90vw;
  }
}

.desktop-card {
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-m {
    width: 40%;
    background: white;
    box-shadow: 0px 4px 35px rgba(172, 172, 172, 0.25);
    margin: 1.5rem;

    &__container {
      &--img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 130px;
        width: 100%;
      }

      div {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3 {
          margin: 0 1.5rem;
          margin-top: 0;
          font-weight: bold;
          font-size: 18px;
        }

        p {
          margin: 0 1.5rem;
          margin-top: 1rem;
          font-size: 16px;
          color: $green;
        }
      }
    }
  }
}
</style>
