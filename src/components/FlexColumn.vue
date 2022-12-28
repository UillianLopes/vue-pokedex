<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    justifyContent: {
      type: String,
      default: 'flex-start',
    },
    gap: {
      type: String,
      default: '0px',
    },
  },
})
export default class FlexColumn extends Vue {
  justifyContent!: string;
  gap!: number;
}
</script>

<style lang="scss">
.flex-column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>

<template>
  <div class="flex-column" :style="{ justifyContent, gap }">
    <slot></slot>
  </div>
</template>
