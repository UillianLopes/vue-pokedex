<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Layout extends Vue {}
</script>
<template>
  <router-view />
</template>
