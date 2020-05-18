import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Oishi" }
  },
  {
    path: "/listing",
    name: "Listing",
    component: Listing,
    meta: { title: "Liste des articles" }
  },
  {
    path: "/Article/:id",
    name: "Article",
    component: Article
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Oishi";
  next();
});

export default router;
