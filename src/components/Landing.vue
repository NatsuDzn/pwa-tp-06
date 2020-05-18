<template>
  <div>
    <div class="heading">
      <div class="heading__logo">
        <h1>Oi<br />shi</h1>
      </div>
    </div>
    <div>
      <div class="landing">
        <h1>
          Les spécialités culinaires avec Louzoun Nathanael & Teixeira Fernandes
          Céline
        </h1>
        <p>
          Parcourez notre blog en <span>découvrant</span> de
          <span>nouvelles saveurs</span> allant du Japon à Thaîlande en passant
          par la Chine.
        </p>

        <p>
          Vous retrouverez nos <span>critiques culinaires</span> tout en vous
          proposant des restaurants à Paris
        </p>

        <h2>Nos dernières critiques</h2>
        <div v-for="(lastArticle, index) in lastArticles" :key="index">
          <router-link v-bind:to="'/Article/' + lastArticle.id">
            <div class="landing__card">
              <div
                class="landing__card--img"
                :style="{ backgroundImage: `url(${lastArticle.articleImg})` }"
              ></div>
              <div class="landing__card--text">
                <h3>{{ lastArticle.title }}</h3>
                <span>
                  <p>{{ lastArticle.rank }}</p>
                  <img v-bind:src="lastArticle.rankImg" alt="Rating" />
                </span>
              </div>
            </div>
          </router-link>
        </div>
        <button class="landing__cta">Voir toutes les critiques</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "data/articles.json";

export default {
  name: "Landing",
  data() {
    return {
      lastArticles: []
    };
  },
  computed: {
    article() {
      return this.lastArticles.find(
        article => article.title === this.$route.params.articleName
      );
    }
  },
  async created() {
    axios(API_URL)
      .then(res => {
        this.lastArticles = res.data;
      })
      .catch(err => console.error(err));
  }
};
</script>
