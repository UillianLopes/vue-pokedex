<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Container extends Vue {}
</script>

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto minmax(0px, 1fr) auto;

  &__header {
    grid-row: 1;
  }

  &__content {
    grid-row: 2;
  }

  &__footer {
    grid-row: 3;
  }
}
</style>

<template>
  <div class="container">
    <div class="container__header">
      <slot name="header"></slot>
    </div>
    <div class="container__content">
      <slot name="content"></slot>
    </div>
    <div class="container__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
