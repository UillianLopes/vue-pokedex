<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BackButton from './BackButton.vue';

@Options({
  props: {
    sticky: Boolean,
  },
  components: {
    BackButton,
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

  &__wrapper {
    width: var(--container-width);
    max-width: var(--container-width);
    display: grid;
    grid-template-columns: auto minmax(0px, 1fr) auto;
    gap: var(--medium-gap);
  }

  &__content,
  &__traling,
  &__leading {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color);
    &:empty {
      display: none;
    }
  }

  &--sticky {
    z-index: 99;
  }
}
</style>
<template>
  <nav class="header" :class="{ 'header--sticky': sticky }">
    <div class="header__wrapper">
      <div class="header__leading">
        <BackButton />
        <slot name="leading"></slot>
      </div>
      <div class="header__content">
        <div class="header__title">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="header__traling">
        <slot name="traling"></slot>
      </div>
    </div>
  </nav>
</template>
