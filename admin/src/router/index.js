import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/CayegoriesList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/categories/create',
        name: 'CategoriesEdit',
        component: CategoriesEdit
      },
      {
        path: '/categories/list',
        name: 'CategoriesList',
        component: CategoriesList
      },
      {
        // 使用/:id,会自动将id放入this.$route.param当中（route而不是router）
        // 与新建分类公用一个页面组件
        path: '/categories/edit/:id',
        name: 'CategoriesEdit',
        component: CategoriesEdit
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
