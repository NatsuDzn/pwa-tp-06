<template>
  <div>
    <Heading />
    <div>
      <div class="landing">
        <div>
          <h1>
            Les spécialités culinaires asiatiques avec Nathanael Louzoun &
            Céline Teixeira Fernandes
          </h1>
          <p>
            Parcourez notre blog en <span>découvrant</span> de
            <span>nouvelles saveurs</span> allant du Japon à Thaîlande en
            passant par la Chine.
          </p>

          <p>
            Vous retrouverez nos <span>critiques culinaires</span> tout en vous
            proposant des restaurants à Paris
          </p>
        </div>

        <div>
          <h2>Le plat phare du mois</h2>
          <div>
            <router-link to="/article/review-3">
              <div class="landing__card">
                <img
                  class="landing__card--img"
                  :style="{
                    backgroundImage:
                      'url(' + require('@/assets/img/oyakodon.jpg') + ')'
                  }"
                />
                <div class="landing__card--text">
                  <h3>Oyakodon</h3>
                  <span>
                    <p>5/5</p>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
          <button class="landing__cta">
            <router-link to="/listing/">
              Voir toutes les critiques
            </router-link>
          </button>
        </div>
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
