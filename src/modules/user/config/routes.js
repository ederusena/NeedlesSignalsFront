const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/modules/user/Dashboard.vue'),
    meta: {
      key: 'USER',
      auth: true,
    },
  },
];

export default routes;
