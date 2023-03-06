import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'

// import Login from '../views/users/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/users/Login.vue'),
  },
  {
    path: '/reg',
    name: 'Register',
    component: () => import('@/views/users/Register.vue'),
  },

  // company 目录
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('@/views/company/Dynamic.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
