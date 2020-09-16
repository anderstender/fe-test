<template>
  <div class="v-field">
    <v-field-header-title :field="field"/>
    <v-field-header-controls />
    <v-table :cols="tableColumns" :rows="[]"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {vOperationsModule} from "@/store/vOperations.module";
  import VFieldHeaderTitle from "@/components/VField/VFieldHeaderTitle.vue";
  import VFieldHeaderControls from "@/components/VField/VFieldHeaderControls/VFieldHeaderControls.vue";
  import Field from "@/models/Field";
  import VTable from "@/components/VTable/VTable.vue";
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import OperationsSort from "@/models/OperationsSort";
  import Operation from '@/models/Operation';
  import VTableRowCellDate from "@/components/VTable/components/VTableRowCell/VTableRowCellDate.vue";
  import VTableRowCellOperation from "@/components/VTable/components/VTableRowCell/VTableRowCellOperation.vue";
  import VTableRowCellCulture from "@/components/VTable/components/VTableRowCell/VTableRowCellCulture.vue";
  import VTableRowCellRate from "@/components/VTable/components/VTableRowCell/VTableRowCellRate.vue";

  import { t } from '@/include/i18n';
  import { OperationType } from "@/models/Operation";



  @Component({
    components: {
      VFieldHeaderTitle,
      VFieldHeaderControls,
      VTable
    }
  })
  export default class VOperations extends Vue {

    @vOperationsModule.Action loadOperations;
    @vOperationsModule.State field !: Field;

    cols: any[] = [
      {
        name: 'Дата',
        sortable: true,
        width: '10%',
        sort: new OperationsSort(
          (row1: Operation, row2: Operation) => {
            return row1.date.moment().diff(row2.date.moment()) < 0 ? -1 : 1;
          },
          (row1: Operation, row2: Operation) => {
            return row1.date.moment().diff(row2.date.moment()) < 0 ? 1 : -1;
          }),
        renderCell: VTableRowCellDate
      },
      {
        name: 'Операция',
        sortable: true,
        width: '45%',
        sort: new OperationsSort(
          (row1: Operation, row2: Operation) => {
            return t(OperationType[row1.type]).value < t(OperationType[row2.type]).value ? -1 : 1;
          },
          (row1: Operation, row2: Operation) => {
            return t(OperationType[row1.type]).value < t(OperationType[row2.type]).value ? 1 : -1;
          }),
        renderCell: VTableRowCellOperation
      },
      {
        name: 'Культура',
        sortable: false,
        width: '25%',
        renderCell: VTableRowCellCulture
      },
      {
        name: 'Качество',
        sortable: true,
        width: '20%',
        sort: new OperationsSort(
          (row1: Operation, row2: Operation) => {
            if(row1.assessment === null || row1.assessment === undefined) {
              return 1;
            }
            if(row2.assessment === null || row2.assessment === undefined) {
              return -1;
            }
            return row1.assessment < row2.assessment ? -1 : 1;
          },
          (row1: Operation, row2: Operation) => {
            if(row1.assessment === null || row1.assessment === undefined) {
              return -1;
            }
            if(row2.assessment === null || row2.assessment === undefined) {
              return 1;
            }
            return row1.assessment < row2.assessment ? 1 : -1;
          }),
        renderCell: VTableRowCellRate
      }
    ];

    get tableColumns() {
      return VTableColumn.createFromArray(this.cols);
    }

    async created(){
      this.loadOperations();
    }
  }
</script>

<style lang="scss">
  .v-field {
    padding-top: 23px;
    padding-left: 30px;
    padding-right: 28px;
    background-color: var(--app__color__white);
  }
</style>