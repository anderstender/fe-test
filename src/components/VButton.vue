<template>
  <div class="v-button">
    <div class="v-button__icon">
      <slot name="icon"></slot>
    </div>
    <div class="v-button__title">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class VButton extends Vue {}
</script>

<style lang="scss">
  .v-button {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    background-color: var(--app__color__white);
    box-shadow : 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    & &__icon {
      align-items: center;
      display: flex;
      margin-right: 7px;
    }
    & &__title {
      font-size: 13px;
      line-height: 40px;
      letter-spacing: -0.4px;
    }
  }
</style>