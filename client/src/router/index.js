import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layouts/Main'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import NewsPage from '@/pages/News'
import ArticlePage from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home page',
          component: HomePage
        },
        {
          path: 'about',
          name: 'About us',
          component: AboutPage
        },
        {
          path: 'news',
          name: 'News',
          component: NewsPage
        },
        {
            path: 'news/:articleId',
            name: 'Article',
            component: ArticlePage
          }
      ]
    }
  ]
})
