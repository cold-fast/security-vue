import { createRouter, createWebHistory } from 'vue-router'

const test = [
  {
    path: '/r1',
    component: () => import('views/Router1.vue')
  },
  {
    path: '/r2',
    component: () => import('views/Router2.vue')
  }
]

const routes = [...test]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router