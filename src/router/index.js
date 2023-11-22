import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        auth: true,
      }
    },
  ],
});


router.beforeEach((to, from, next) => {

  if (to.meta?.auth) {
    const auth = useUserStore();
    if (auth.token) {
      const isAuthenticated = auth.checkToken();
      if (isAuthenticated) {
        next();
      } else {
        next({ name: 'Login' });
      }
    } else {
      next({ name: 'Login' });
    }
    console.log(to.name);
  } else {
    next();
  }

});

export default router;
