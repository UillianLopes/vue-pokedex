<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Capitalize } from '@/core/functions';
import { pokemonService } from '@/core/services/PokemonService';
import { PokemonModel } from '@/core/models';
import PokemonType from './PokemonType.vue';
import { Replace } from '@/core/functions/Replace';

@Options({
  props: {
    name: String,
  },
  components: {
    PokemonType,
  },
})
export default class PokemonCard extends Vue {
  name!: string;
  pokemon: PokemonModel | null = null;
  loading = false;

  readonly Capitalize = Capitalize;
  readonly Replace = Replace;

  override created(): void {
    this.loadPokeon();
  }

  loadPokeon() {
    this.loading = true;
    pokemonService
      .getPokemon(this.name)
      .then((response) => {
        this.pokemon = new PokemonModel(response);
      })
      .finally(() => (this.loading = false));
  }

  get image(): string {
    return this.pokemon?.image || '';
  }

  get types(): string[] {
    return this.pokemon?.types || [];
  }

  get weight(): number | null {
    return this.pokemon?.weight || null;
  }

  get stats(): { name: string; value: number }[] {
    return this.pokemon?.stats || [];
  }
}
</script>

<style scoped lang="scss">
.pokemon-card {
  &__content {
    height: 400px;
    max-height: 400px;
  }

  &__grid {
    display: grid;
    grid-auto-rows: auto minmax(0px, auto) auto;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    gap: 8px;
  }

  &__image-container {
    display: flex;
    justify-content: center;
    height: 150px;
  }
  &__descriptors {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
  }

  &__footer {
    display: flex;
    flex-direction: row;
  }

  &__image {
    width: 150px;
  }
}
</style>
<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="card-header">
        <span>{{ Capitalize(name) }}</span>
      </div>
    </template>
    <div class="pokemon-card__content">
      <div class="pokemon-card__grid">
        <div class="pokemon-card__image-container">
          <img class="pokemon-card__image" :src="image" />
        </div>
        <div class="pokeomn-card__details">
          <el-scrollbar>
            <el-descriptions
              size="small"
              direction="horizontal"
              :column="1"
              :border="true"
              :row="2"
            >
              <el-descriptions-item label="Type(s)">
                <div class="pokemon-card__descriptors">
                  <PokemonType
                    v-for="pokemonType in types"
                    :key="pokemonType"
                    :type="pokemonType"
                    :size="24"
                  />
                </div>
              </el-descriptions-item>
              <el-descriptions-item label="Weight">
                <div class="pokemon-card__descriptors">
                  {{ pokemon?.weight }}
                </div>
              </el-descriptions-item>
              <el-descriptions-item
                v-for="stat in stats"
                :label="Capitalize(Replace(stat.name, '-', ' '))"
                :key="stat.name"
              >
                <div class="pokemon-card__descriptors">
                  {{ stat.value }}
                </div>
              </el-descriptions-item>
            </el-descriptions>
          </el-scrollbar>
        </div>
        <div class="pokemon-card__footer">
          <router-link :to="{ name: 'PokemonDetails', params: { name } }">
            <el-button type="primary" plain> View details </el-button>
          </router-link>
        </div>
      </div>
    </div>
  </el-card>
</template>
