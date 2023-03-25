import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'PokemonPage',
          component: () => import('@/pages/HomePage.vue')
        },
        {
          path: 'auth',
          name: 'AuthPage',
          component: () => import('@/pages/AuthPage.vue')
        }
      ]
    }
  ]
})
