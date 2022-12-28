<script lang="ts">
import { POKEMON_TYPE_COLORS } from '@/core/constants';
import { ICONS } from '@/core/constants/Icons';
import { Capitalize } from '@/core/functions';
import { Options, Vue } from 'vue-class-component';
import Icon from './Icon.vue';

@Options({
  props: {
    type: String,
    size: {
      type: Number,
      default: 32,
    },
  },
  components: {
    Icon,
  },
})
export default class PokemonType extends Vue {
  type!: string;
  size!: number;
  icon: string | null = null;
  color: string | null = null;

  get height(): string {
    return `${this.size}px`;
  }

  get width(): string {
    return `${this.size}px`;
  }

  override created(): void {
    this.icon = ICONS.POKEMON_TYPES[this.type];
    this.color = POKEMON_TYPE_COLORS[this.type];
  }
  readonly Capitalize = Capitalize;
}
</script>

<style scoped lang="scss"></style>

<template>
  <el-tooltip v-if="icon" :content="Capitalize(type)" effect="light">
    <Icon :icon="icon" :size="size" :color="color" />
  </el-tooltip>
</template>
