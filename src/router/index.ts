import PokemonListView from '@/views/PokemonListView.vue';
import PokemonDetailsView from '@/views/PokemonDetailsView.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon-list',
    component: PokemonListView,
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon-details',
    component: PokemonDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
