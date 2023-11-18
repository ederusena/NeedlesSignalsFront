import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
    // {
    //   path: "/reactive",
    //   name: "reactive",
    //   component: () => import("../views/Reactive.vue"),
    // },
    // {
    //   path: "/vfor",
    //   name: "vfor",
    //   component: () => import("../views/Vfor.vue"),
    // },
  ],
});

export default router;
