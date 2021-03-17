import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Config from "../views/Configurator.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Configurator",
    component: Config
  },
  {
    path: "/creator",
    name: "Widget",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Result.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
