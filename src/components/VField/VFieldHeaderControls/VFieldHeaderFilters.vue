<template>
  <div class="v-field-header-filters">
    <div class="v-field-header-filters__filter"
         v-for="(filter, index) in filters"
         :class="operationCssClass(filter)"
         :key="index"
         @click="() => operationFilter = filter">
      {{filter.name}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import OperationFilter from "@/models/OperationFilter";

  @Component
  export default class VFieldHeaderFilters extends Vue {
    @Prop() value !: OperationFilter;
    @Prop({required: true}) filters !: OperationFilter[];


    get operationFilter() {
      return this.value || this.filters[0];
    }

    set operationFilter(filter: OperationFilter) {
      this.$emit('input', filter)
    }

    operationCssClass(filter: OperationFilter) {
      return {
        'v-field-header-filters__filter__active': filter === this.operationFilter
      };
    }
  }
</script>

<style lang="scss">
  .v-field-header-filters {
    display: flex;
    flex-direction: row;
    height: 56px;

    & &__filter {
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      letter-spacing: -0.517647px;
      text-transform: uppercase;
      color: var(--app__color__blue);
      cursor: pointer;
      margin-right: 18px;
      line-height: 56px;

      &__active {
        color: var(--app__color__font-main);
        cursor: default;
      }
    }
  }
</style>