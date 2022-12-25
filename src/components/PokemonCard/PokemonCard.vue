<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Capitalize } from '@/core/functions';
import { pokemonService } from '@/core/services/PokemonService';
import { GetPokemonModel } from '@/core/models/GetPokemonModel';

@Options({
  props: {
    name: String,
  },
})
export default class PokemonCard extends Vue {
  name!: string;
  pokemonDetails: GetPokemonModel | null = null;
  loading = false;

  readonly Capitalize = Capitalize;

  override created(): void {
    this.loadPokeon();
  }

  loadPokeon() {
    this.loading = true;
    pokemonService
      .getPokemon(this.name)
      .then((response) => {
        this.pokemonDetails = response;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  get image(): string {
    if (!this.pokemonDetails || !this.pokemonDetails.sprites) {
      return '';
    }

    return (
      this.pokemonDetails.sprites.other['official-artwork']?.front_default ??
      this.pokemonDetails.sprites.front_default
    );
  }
}
</script>

<style scoped lang="scss" src="./PokemonCard.scss"></style>
<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="card-header">
        <span>{{ Capitalize(name) }}</span>
      </div>
    </template>
    <div class="pokemon-card__content">
      <div class="pokemon-card__row">
        <img class="pokemon-card__image" :src="image" />
      </div>
    </div>
  </el-card>
</template>
