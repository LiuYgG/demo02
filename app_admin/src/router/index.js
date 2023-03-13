import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    // redirect:'/main',
    children:[
      { path:'/main', name:'main', component: ()=> import('@/views/common/MainContent.vue') },
      { path:'/webset', name:'webset', component: ()=> import('@/views/setting/webset.vue')}
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
