// Importing all files and providing routes to them

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Accordion from '../components/Accordion.vue'
import Images from '../components/Images.vue'
import Grid from '../components/Grid.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Accordion',
    name: 'Accordion',
    component: () => import('../components/Accordion.vue')
  },
  {
    path: '/Images',
    name: 'Images',
    component: () => import('../components/Images.vue')
  },
  {
    path: '/Grid',
    name: 'Grid',
    component: () => import('../components/Grid.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
