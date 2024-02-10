import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/rankings'
  },
  {
    path: '/rankings/',
    component: () => import ('../views/RankingsPage.vue')
  },
  {
    path: '/rounds/',
    component: () => import ('../views/RoundsPage.vue')
  },
  {
    path: '/matchups/',
    component: () => import ('../views/MatchupsPage.vue')
  },
  {
    path: '/teams/',
    component: () => import ('../views/TeamsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
