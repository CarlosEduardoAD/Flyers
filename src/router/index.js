import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'




const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/comunidade',
    name: 'comunidade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/comunidade.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sobre.vue')
  },
  {
    path: '/opensource',
    name: 'opensource',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/opensource.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
