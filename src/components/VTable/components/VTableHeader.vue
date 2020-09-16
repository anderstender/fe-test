<template>
  <div class="v-table-header">
    <v-table-header-cell v-for="(col, index) in cols" :column="col" :key="index"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import {vOperationsModule} from "@/store/vOperations.module";
  import OperationsSort from "@/models/OperationsSort";
  import VTableHeaderCell from "@/components/VTable/components/VTableHeaderCell.vue";

  @Component({
    components: {
      VTableHeaderCell
    }
  })
  export default class VTableHeader extends Vue {
    @Prop() cols !: VTableColumn[];
  }
</script>

<style lang="scss">
  .v-table-header {
    display: grid;
    grid-template-columns: var(--v-table__grid__template);
    height: 40px;
    width: 100%;
    background-color: #EDEEEE;

    & &__column {
      display: flex;
      flex-direction: row;
      padding-left: 9px;
      padding-right: 9px;

      &__sortable {
        cursor: pointer;
      }

      &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: -0.517647px;
        line-height: 40px;
      }
    }
  }
</style>