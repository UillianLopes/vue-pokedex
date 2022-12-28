<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    height: {
      type: Number,
      default: 16,
    },
  },
})
export default class VerticalSpacer extends Vue {
  height!: number;
}
</script>

<template>
  <div :style="{ height: `${height}px` }"></div>
</template>
