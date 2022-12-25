<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { pokemonService } from '@/core/services/PokemonService';
import { GetPokemonsModel } from '@/core/models';
import { Capitalize } from '@/core/functions';
import PokemonCard from '@/components/PokemonCard/PokemonCard.vue';
import Container from '@/components/Container/Container.vue';

@Options({
  components: {
    PokemonCard,
    Container,
  },
})
export default class PokemonListView extends Vue {
  private readonly limit: number = 50;
  loading = false;
  pokemons: GetPokemonsModel[] = [];

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
        const obtainedPokemons = response.results.map(
          (pokemon) => new GetPokemonsModel(pokemon)
        );

        this.pokemons = loadMore
          ? this.pokemons.concat(obtainedPokemons)
          : obtainedPokemons;
      })
      .finally(() => (this.loading = false));
  }
  loadTest() {
    this.loadPokemons(true);
  }

  readonly Capitalize = Capitalize;
}
</script>
<style lang="scss">
.pokemon-list {
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 16px;
    width: 1280px;
    max-width: 1280px;
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
  }
}
</style>

<template>
  <container>
    <template #content>
      <el-scrollbar height="100%" v-if="pokemons && pokemons.length > 0">
        <div
          class="pokemon-list__container"
          v-infinite-scroll="loadTest"
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
        </div>
      </el-scrollbar>
    </template>
  </container>
</template>
