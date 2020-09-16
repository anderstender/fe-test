<template functional>
  <div class="v-field-header-title">
    Операции на поле {{props.field.name}}
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import Field from "@/models/Field";

  @Component
  export default class VFieldHeaderTitle extends Vue {
    @Prop({required: true}) field !: Field;
  }
</script>

<style lang="scss">
  .v-field-header-title {
    font-weight: 500;
    font-size: 25px;
    line-height: 31px;
    letter-spacing: -0.8px;
  }
</style>