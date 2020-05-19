<template>
  <div>
    <Heading />
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

        <h2>Le plat phare du mois</h2>
        <div>
          <div class="landing__card">
            <img
              class="landing__card--img"
              :style="{
                backgroundImage: 'url(' + require('@/assets/img/bowl.png') + ')'
              }"
            />
            <div class="landing__card--text">
              <h3>Oyakodon</h3>
              <span>
                <p>5/5</p>
                <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                <img src="../../public/img/svg/bowl.svg" alt="Rating" />
                <img src="../../public/img/svg/bowl.svg" alt="Rating" />
              </span>
            </div>
          </div>
        </div>
        <button class="landing__cta">
          <router-link to="/listing/">
            Voir toutes les critiques
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "@/components/Heading.vue";

export default {
  name: "Home",
  components: {
    Heading
  }
};
</script>
