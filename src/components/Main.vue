<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Main extends Vue {}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 16px;
  &__content {
    width: var(--container-width);
    max-width: var(--container-width);
  }
}
</style>
<template>
  <main class="main">
    <div class="main__content">
      <slot></slot>
    </div>
  </main>
</template>
