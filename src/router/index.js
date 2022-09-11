import { createRouter, createWebHashHistory } from 'vue-router';

import MainPage from '@/pages/MainPage.vue';
import FractionPage from '@/pages/FractionPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/fraction/:id',
      name: 'fraction',
      component: FractionPage,
    },
  ],
});

export default router;
