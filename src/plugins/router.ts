import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/AuthPage.vue'),
        },
      ],
    },
  ],
});
