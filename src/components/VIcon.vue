<template lang="html" functional>
  <img :src="`/icons/${props.icon}.svg`"/>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class VIcon extends Vue {
    @Prop({required:true}) icon !: string;
  }
</script>

<style lang="scss">
</style>