<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { pokemonService } from '@/core/services/PokemonService';
import { IGetPokemonsResponse } from '@/core/models';
import { Capitalize, HandleAxiosRequestErrors } from '@/core/functions';
import PokemonCard from '@/components/PokemonCard.vue';
import Container from '@/components/Container.vue';
import Header from '@/components/Header.vue';
import VerticalSpacer from '@/components/VerticalSpacer.vue';
import Main from '@/components/Main.vue';
import { AxiosError } from 'axios';

@Options({
  components: {
    PokemonCard,
    Container,
    Header,
    VerticalSpacer,
    Main,
  },
})
export default class List extends Vue {
  private readonly limit: number = 50;
  loading = false;
  pokemons: IGetPokemonsResponse[] = [];
  scrollTop = 0;

  override created(): void {
    this.loadPokemons();
  }

  loadPokemons(loadMore?: boolean) {
    this.loading = true;
    pokemonService
      .getPokemons({
        offset: loadMore ? this.pokemons.length : 0,
        limit: this.limit,
      })
      .then((response) => {
        const obtainedPokemons = response.results;

        this.pokemons = loadMore
          ? this.pokemons.concat(obtainedPokemons)
          : obtainedPokemons;
      })
      .catch((error: AxiosError) => HandleAxiosRequestErrors('Pokemons', error))
      .finally(() => (this.loading = false));
  }

  loadMorePokemons() {
    this.loadPokemons(true);
  }

  scrolled(scrolled: { scrollTop: number }): void {
    this.scrollTop = scrolled.scrollTop;
  }

  readonly Capitalize = Capitalize;
}
</script>
<style lang="scss" scoped>
.pokemon-list {
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 16px;

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, minmax(0px, 1fr));
    }

    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(2, minmax(0px, 1fr));
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0px, 1fr));
    }

    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(4, minmax(0px, 1fr));
    }

    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, minmax(0px, 1fr));
    }
  }
}
</style>

<template>
  <Container @scroll="scrolled($event)" v-loading="loading">
    <Header id="header" :sticky="scrollTop > 0">
      <template #title> Pokedex </template>
    </Header>
    <VerticalSpacer />
    <Main
      v-infinite-scroll="loadMorePokemons"
      :infinite-scroll-distance="300"
      :infinite-scroll-delay="500"
      :infinity-scroll-disabled="loading"
    >
      <div class="pokemon-list__grid">
        <PokemonCard
          v-for="pokemon in pokemons"
          :key="pokemon.url"
          :name="pokemon.name"
        >
          <template #header>
            <div class="card-header">
              <span>{{ Capitalize(pokemon.name) }}</span>
            </div>
          </template>
        </PokemonCard>
      </div>
    </Main>
    <VerticalSpacer />
  </Container>
</template>
