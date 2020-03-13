import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import BlogLabelEdit from '../views/BlogLabelEdit.vue'
import BlogLabelList from '../views/BlogLabelList.vue'
import AddBlog from '../views/AddBlog.vue'
import ListBlog from '../views/ListBlog.vue'
import ListComment from '../views/ListComment.vue'
import ListLeaveMessage from '../views/ListLeaveMessage.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
      path: '/addBlogLabel',
      name: 'BlogLabelAdd',
      component: BlogLabelEdit,
    },
    {
      path: '/editBlogLabel/:id',
      component: BlogLabelEdit,
      props: true
    }, {
      path: '/listBlogLabel',
      name: 'BlogLabelList',
      component: BlogLabelList,
    }, {
      path: '/addBlog',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/editBlog/:id',
      component: AddBlog,
      props: true
    },
    {
      path: '/listBlog',
      name: 'listBlog',
      component: ListBlog
    },
    {
      path: '/listComment',
      name: 'listComment',
      component: ListComment
    },
    {
      path: '/listMessage',
      name: 'listMessage',
      component: ListLeaveMessage
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router