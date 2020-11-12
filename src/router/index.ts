import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Table from '../views/table.vue'
import Watch from '../views/watch.vue'
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
      path: '/table',
      component: Table
    },
    {
      path: '/watch',
      component: Watch
    },
    {
      path: '/:pathMatch(.*)*',
      component: NoFound
    }
  ]
})
