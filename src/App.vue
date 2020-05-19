<template>
  <div id="app">
    <router-view />
    <Header></Header>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style lang="scss">
@import "../src/assets/scss/misc/mixins.scss";
</style>

<script>
import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header
    // Footer
  }
};
</script>
