import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: import('@/views/Login/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
    },
  ],
});

export default router;
