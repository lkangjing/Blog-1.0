import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstView from '../views/FirstView.vue'
import Message from '../views/Message.vue'
import SingleBlog from '../views/SingleBlog.vue'
import BlogList from '../views/BlogList.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstView',
    component: FirstView
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/home/bloglist/:id',  
        name: 'BlogList',
        component: BlogList,
        props:true
      },
      {
        path: '/',  
        name: 'BlogList',
        component: BlogList
      },
      {
        path: '/singleblog/:id',
        name: 'SingleBlog',
        component: SingleBlog
      },
    ]
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
