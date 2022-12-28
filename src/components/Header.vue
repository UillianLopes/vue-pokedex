<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    sticky: Boolean,
  },
})
export default class Header extends Vue {
  sticky!: boolean;
}
</script>
<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color);
  padding: 0px 16px;

  &__content {
    width: var(--container-width);
    max-width: var(--container-width);
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color);
  }

  &--sticky {
    z-index: 99;
  }
}
</style>
<template>
  <nav class="header" :class="{ 'header--sticky': sticky }">
    <div class="header__content">
      <div class="header__title">
        <slot name="title"></slot>
      </div>
    </div>
  </nav>
</template>
