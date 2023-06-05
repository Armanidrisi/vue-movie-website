import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleMovie from "../views/SingleMovie";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: SingleMovie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
