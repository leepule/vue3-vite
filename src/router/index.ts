import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import NoFound from '../components/NoFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      component: NoFound
    }
  ]
})
