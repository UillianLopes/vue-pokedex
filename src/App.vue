<template>
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    --container-width: 100%;
  }

  @media only screen and (min-width: 600px) {
    --container-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    --container-width: 100%;
  }

  @media only screen and (min-width: 992px) {
    --container-width: 100%;
  }

  @media only screen and (min-width: 1280px) {
    --container-width: 1280px;
  }
}

* {
  box-sizing: border-box;
}

@import 'element-plus/theme-chalk/dark/css-vars.css';
</style>
