import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/auth';
import user from '@/modules/user';
import { environment } from './';

export const listaAllRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect() {
      return { name: 'Login' };
    },
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/modules/user/views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/modules/user/views/RegisterView.vue'),
  },
  ...user.routes,
];

const router = createRouter({
  history: createWebHistory(environment.baseURL),
  hash: false,
  routes: listaAllRoutes,
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
  } else {
    next();
  }
});

export default router;
