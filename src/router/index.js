import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: '/main',
        name: 'Main',
        component: () => import('@/pages/Main.vue')
      },
    ]
  },
  {
    path: '',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/signin',
        name: 'Auth',
        component: () => import('@/pages/SignIn.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
