<template functional>
  <router-view class="fe-test-app__view"/>
</template>

<script lang="ts">
  import {Component, Vue } from 'vue-property-decorator';

  @Component
  export default class VRouterViewWrapper extends Vue {}
</script>

<style lang="scss">
  .fe-test-app__view {
    width: var(--app__view__width);
    margin: 0 auto;
    box-shadow: 20px -20px 20px rgba(0, 0, 0, 0.2);
    height: calc(100% - var(--app__header__height));
    box-sizing: border-box;
  }
</style>