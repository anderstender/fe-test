<template>
  <div class="v-table-header-cell"
       :class="colCssClasses"
       @click.prevent.stop="setColumnSort">
    <div class="v-table-header-cell__title">{{column.name}}</div>
    <div class="v-table-header-cell__sort" :class="colArrowCssClasses"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import {vOperationsModule} from "@/store/vOperations.module";
  import OperationsSort from "@/models/OperationsSort";

  @Component
  export default class VTableHeaderCell extends Vue {
    @Prop() column !: VTableColumn;
    @vOperationsModule.State operationSort !: OperationsSort;

    @vOperationsModule.Mutation resetSort;
    @vOperationsModule.Mutation setSort;

    get colCssClasses() {
      return {
        'v-table-header-cell__sortable': this.column.sortable
      };
    }

    get colArrowCssClasses() {
      return {
        'v-table-header-cell__sort__up': this.isCurrentSort && this.operationSort.isAsc,
        'v-table-header-cell__sort__down': this.isCurrentSort && this.operationSort.isDesc
      };
    }

    get isCurrentSort() {
      return this.operationSort && this.operationSort === this.column.sort;
    }

    setColumnSort() {
      if(!this.column.sortable) return;
      if(this.isCurrentSort) {
        this.operationSort.toggle();
      }else {
        this.setSort(this.column.sort);
      }
    }
  }
</script>

<style lang="scss">
  .v-table-header-cell {
    display: flex;
    flex-direction: row;
    padding-left: 9px;
    padding-right: 9px;

    --v-table-header-cell__triangle__size: 6px;

    & &__sort {
      border-left: var(--v-table-header-cell__triangle__size) solid transparent;
      border-right: var(--v-table-header-cell__triangle__size) solid transparent;
      border-top: var(--v-table-header-cell__triangle__size) solid #A7A9AC;
      height: 0;
      margin-top: 18px;

      &__up,
      &__down {
        border-top: var(--v-table-header-cell__triangle__size) solid var(--app__color__blue);
      }

      &__up {
        transform: rotateX(180deg);
      }
    }

    &__sortable {
      cursor: pointer;
    }

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      letter-spacing: -0.517647px;
      line-height: 40px;
      margin-right: 5px;
    }
  }
</style>