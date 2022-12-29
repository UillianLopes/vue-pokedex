import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { POKEMON_ROUTES } from '@/views/Pokemon';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

const routes: Array<RouteRecordRaw> = [
  ...POKEMON_ROUTES,
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: 'NotFoundResource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
