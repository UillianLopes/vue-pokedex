<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    disabled: Boolean,
    loading: Boolean,
  },
})
export default class BackButton extends Vue {
  disabled!: boolean;
  goBack() {
    this.$router.back();
  }
}
</script>

<template>
  <el-button @click="goBack()" :disabled="disabled"> Back </el-button>
</template>
