<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    alignItems: {
      type: String,
      default: 'flex-start',
    },
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
export default class FlexRow extends Vue {
  alignItems!: string;
  justifyContent!: string;
  gap!: number;
}
</script>

<style lang="scss">
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <div class="flex-row" :style="{ alignItems, justifyContent, gap }">
    <slot></slot>
  </div>
</template>
