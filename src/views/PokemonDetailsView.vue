<script lang="ts">
import Container from '@/components/Container.vue';
import FlexColumn from '@/components/FlexColumn.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import VerticalSpacer from '@/components/VerticalSpacer.vue';
import { Capitalize } from '@/core/functions';
import { Replace } from '@/core/functions/Replace';
import { DetailedPokemonModel } from '@/core/models';
import { pokemonService } from '@/core/services';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Container,
    Header,
    Main,
    VerticalSpacer,
    FlexColumn,
  },
})
export default class PokemonDetailsView extends Vue {
  name = '';
  loading = false;
  detailedPokemon: DetailedPokemonModel | null = null;

  override created(): void {
    if (this.$route.params.name instanceof Array) {
      return;
    }

    this.name = this.$route.params.name;
    this.loadPokemon();
  }

  loadPokemon() {
    this.loading = true;
    pokemonService.getPokemon(this.name).then((pokemon) => {
      this.detailedPokemon = new DetailedPokemonModel(pokemon);
      this.loading = false;
    });
  }

  get image(): string {
    return this.detailedPokemon?.image || '';
  }

  readonly Capitalize = Capitalize;
  readonly Replace = Replace;
}
</script>
<style scoped></style>
<template>
  <Container>
    <Header>
      <template #title> Pokedex </template>
    </Header>
    <Main v-if="detailedPokemon">
      <VerticalSpacer />
      <el-row :gutter="16">
        <el-col :span="6" :gutter="16">
          <FlexColumn gap="16px">
            <el-avatar :size="200">
              <img :src="detailedPokemon.image" />
            </el-avatar>
            <el-descriptions :column="1" :border="true">
              <el-descriptions-item
                v-for="stat in detailedPokemon.stats"
                :label="Capitalize(Replace(stat.name, '-', ' '))"
                :key="stat.name"
              >
                {{ stat.value }}
              </el-descriptions-item>
            </el-descriptions>
          </FlexColumn>
        </el-col>
        <el-col :span="18">
          <h1>{{ Capitalize(name) }}</h1>
        </el-col>
      </el-row>
    </Main>
  </Container>
</template>
