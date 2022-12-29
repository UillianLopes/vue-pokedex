import { RouteRecordRaw } from 'vue-router';
import Layout from './Layout.vue';
import Details from './Details.vue';
import List from './List.vue';

export const POKEMON_ROUTES: Array<RouteRecordRaw> = [
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: Layout,
    children: [
      {
        path: '',
        name: 'PokemonDefault',
        redirect: () => ({ name: 'PokemonList' }),
      },
      {
        path: ':name',
        name: 'PokemonDetails',
        component: Details,
        props: true,
      },
      {
        path: 'list',
        name: 'PokemonList',
        component: List,
      },
    ],
  },
];
