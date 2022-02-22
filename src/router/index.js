import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import MovieList from '../views/MovieList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetail
  },
  {
      path: '/movies',
      name: 'Movie List',
      component: MovieList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
