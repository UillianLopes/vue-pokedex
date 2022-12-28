<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    icon: String,
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
})
export default class Icon extends Vue {
  icon!: string;
  size!: number;
  color!: string;

  get width(): string {
    return `${this.size}px`;
  }

  get height(): string {
    return `${this.size}px`;
  }
}
</script>
<template>
  <svg :width="width" :height="height" :fill="color">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :href="icon"></use>
  </svg>
</template>
