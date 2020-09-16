<template>
  <div class="v-table-row-cell-operation">
    {{t(operationType[row.type])}}
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import Operation from "@/models/Operation";
  import {OperationType} from "@/models/Operation";

  @Component
  export default class VTableRowCellOperation extends Vue {
    @Prop() row !: Operation;

    get operationType() {
      return OperationType;
    }

  }
</script>

<style lang="scss">
  .v-table-row-cell-operation {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: -0.47px;
  }
</style>