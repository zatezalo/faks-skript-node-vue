import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Post from '../views/posts/Post.vue'
import createPost from '../views/posts/createPost.vue'
import editPost from '../views/posts/editPost.vue'

import Topic from '../views/topics/Topic.vue'
import createTopic from '../views/topics/createTopic.vue'
import editTopic from '../views/topics/editTopic.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/post/:id',// /:id
    name: 'post',
    component: Post,
    props: true
  },
  {
    path: '/topic/:id/create',///topic/'+topic.id+'/create'
    name: 'createPost',
    component: createPost
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: editPost
  },
  {
    path: '/topic/:id',// /:id
    name: 'Topic',
    component: Topic
  },
  {
    path: '/topics/create',
    name: 'createTopic',
    component: createTopic
  },
  {
    path: '/topic/:id/edit',
    name: 'editTopic',
    component: editTopic
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})
Vue.use(VueRouter)

export default router
