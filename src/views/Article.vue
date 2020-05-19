<template>
  <div>
    <Heading />
    <div class="article" v-if="post">
      <h1>{{ post.title }}</h1>
      <div
        class="article__img"
        :style="{ backgroundImage: `url(${post.articleImg})` }"
      ></div>
      <div class="article__details">
        <span class="article__details--rank">
          {{ post.rank }}
        </span>
        <span class="article__details--adress">
          <img src="../../public/img/svg/pin.svg" alt="Adress" />
          {{ post.adress }}
        </span>
      </div>
      <div class="article__price">
        <p>{{ post.price }}</p>
      </div>
      <div class="article__text">
        <p>
          {{ post.descFirst }} <br /><br /><span>{{
            post.descFirstAuthor
          }}</span>
        </p>
        <p>
          {{ post.descSecond }}<br /><br />
          <span>{{ post.descSecondAuthor }}</span>
        </p>
      </div>
      <div class="comments">
        <div class="comments__section">
          <h1>Vos commentaires</h1>
          <div class="comments__card">
            <div class="comments__card--header">
              <p>Amélie B.</p>
              <FiveStars />
            </div>
            <div class="comments__card--content">
              Je suis entièrement d’accord ce restaurant est l’un des meilleurs
              où j’ai pu diner
            </div>
          </div>
          <div class="comments__card">
            <div class="comments__card--header">
              <p>Michel</p>
              <TwoStars />
            </div>
            <div class="comments__card--content">
              Bof bof, j’ai mieux diner dans le 13è....
            </div>
          </div>
        </div>

        <h2>Rédigez un commentaire</h2>
        <div class="comments__form">
          <input type="text" placeholder="Votre pseudo" />
          <input type="email" placeholder="Votre adresse mail" />
          <textarea
            name=""
            placeholder="240 caractères max"
            maxlength="240"
          ></textarea>
          <button>Envoyez</button>
        </div>

        <div class="share">
          <input type="text" value="Get link" id="link" />
          <button id="share" @click="copytoCliboard">
            Partager <img src="../../public/img/svg/share.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import FiveStars from "@/components/FiveStars.vue";
import TwoStars from "@/components/TwoStars.vue";

export default {
  components: {
    Heading,
    FiveStars,
    TwoStars
  },
  data() {
    return {
      post: null
    };
  },

  methods: {
    copytoCliboard: () => {
      var input = document.getElementById("link");
      input.value = location.href;
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand("copy");
      var button = document.getElementById("share");
      button.innerHTML = "Lien copié !";
    }
  },

  created() {
    fetch(
      `https://my-json-server.typicode.com/NatsuDzn/demo/posts/${this.$route.params.id}`
    ).then(response => {
      response.json().then(data => {
        this.post = data;
      });
    });
  }
};
</script>

<style lang="scss">
@import "../assets/scss/misc/mixins.scss";

.article {
  // padding: 1rem;

  animation: fadeIn 0.75s ease-in-out;

  @media only screen and (min-width: 1024px) {
    margin: 6rem auto;
    max-width: 1440px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #3b3b3b;
    text-align: left;
    padding: 1rem;

    @media only screen and (min-width: 1024px) {
      font-size: 32px;
      line-height: normal;
    }
  }

  &__img {
    width: 100%;
    height: 120px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 12px;

    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }

    &--rank {
      color: $green;
    }

    &--adress {
      display: flex;
      align-items: center;
      color: #ff8585;

      img {
        margin-right: 5px;

        @media only screen and (min-width: 1024px) {
          width: 16px;
        }
      }
    }
  }

  &__price {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    padding-top: 0;
    font-size: 12px;
    color: #9c9c9c;

    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  &__text {
    padding: 1rem;
    font-size: 14px;
    text-align: left;
    padding-top: 0;

    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }

    p {
      margin: 1rem 0;

      @media only screen and (min-width: 1024px) {
        padding: 2rem;
      }

      span {
        font-weight: bold;

        &::before {
          content: "-";
        }
      }
    }
  }
}

.comments {
  padding-bottom: 60px;

  @media only screen and (min-width: 1024px) {
    margin-top: 1.5rem;
  }

  &__section {
    @media only screen and (min-width: 1024px) {
      margin-bottom: 4rem;
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #3b3b3b;
    text-align: left;
    padding: 0 1rem;
    padding-bottom: 0;

    @media only screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 14px;
    line-height: 12px;
    text-align: left;
    padding: 0 1rem;
    padding-bottom: 0;
    margin-top: 1rem;

    @media only screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(172, 172, 172, 0.25);
    padding: 0.5rem 1rem;
    margin-top: 1rem;

    @media only screen and (min-width: 1024px) {
      width: 90%;
      margin: 1.5rem auto;
    }

    &:nth-child(0) {
      margin-top: 0;
    }

    &--header {
      display: flex;
      align-items: center;
      color: #9c9c9c;
      font-size: 8px;
      line-height: 12px;

      @media only screen and (min-width: 1024px) {
        font-size: 24px;
        line-height: normal;
      }

      p {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;

        @media only screen and (min-width: 1024px) {
          font-size: 18px;
        }
      }
    }

    &--content {
      color: black;
      font-size: 10px;
      line-height: 12px;
      text-align: left;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media only screen and (min-width: 1024px) {
      margin-top: 1.5rem;
    }

    input {
      width: 100%;
      height: 25px;
      margin: 0.25rem 0rem;
      background: #ffffff;
      box-shadow: 0px 4px 35px rgba(172, 172, 172, 0.25);
      outline: 0;
      border: none;
      font-size: 14px;
      font-family: Poppins;

      @media only screen and (min-width: 1024px) {
        margin: 1.25rem 0rem;
        font-size: 18px;
        padding: 1rem;
        width: auto;
      }

      &:nth-child(3) {
        height: 55px;
        line-height: 55px;

        &::placeholder {
          text-align: right;
          position: relative;
          bottom: -16px;
        }
      }

      &::placeholder {
        font-size: 14px;
      }
    }

    textarea {
      width: 95%;
      max-width: 95%;
      margin: 0 auto;
      min-height: 100px;
      padding: 10px;
      background: #ffffff;
      box-shadow: 0px 4px 35px rgba(172, 172, 172, 0.25);
      font-family: Poppins;

      @media only screen and (min-width: 1024px) {
        width: auto;
        max-width: 100%;
        margin: 1.25rem 0rem;
        font-size: 18px;
        padding: 1rem;
      }
    }

    button {
      align-self: flex-end;
      @include button-style;
    }
  }
}

.share {
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    opacity: 0;
  }

  button {
    @include button-style;
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  img {
    margin-left: 1rem;
  }
}
</style>
