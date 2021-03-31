import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Widgets from "../views/Widgets.vue";
import Constructor from "../views/Constructor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/widgets",
    name: "widgets",
    component: Widgets
  },
  {
    path: "/constructor",
    name: "constructor",
    component: Constructor
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
