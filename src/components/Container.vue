<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Container extends Vue {
  onScroll($event: { scrollTop: number; scrollLeft: number }) {
    this.$emit('scroll', $event);
  }
}
</script>

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: block;
}
</style>

<template>
  <div class="container">
    <el-scrollbar height="100%" @scroll="onScroll($event)">
      <slot></slot>
    </el-scrollbar>
  </div>
</template>
