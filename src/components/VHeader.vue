<template>
  <div class="v-header"></div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class VHeader extends Vue {

  }
</script>

<style lang="scss">
  .v-header {
    background-color: var(--app__color__header-background);
    min-width: 100%;
    height: var(--app__header__height);
  }
</style>