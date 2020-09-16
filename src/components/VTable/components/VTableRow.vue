<template >
  <div class="v-table-row">
    <component v-for="(col, index) in cols"
               :is="col.renderCell"
               :row="row"
               :key="index"
               class="v-table-row__cell"
    />
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import Operation from "@/models/Operation";

  @Component
  export default class VTableRow extends Vue {
    @Prop() row !: Operation;
    @Prop() cols !: VTableColumn[];
  }
</script>

<style lang="scss">
  .v-table-row {
    display: grid;
    grid-template-columns: var(--v-table__grid__template);
    height: var(--app__table__row__height);
    border-bottom: 1px solid #EDEEEE;

    & &__cell {
      padding-left: 7px;
      padding-right: 7px;
      line-height: var(--app__table__row__height);
    }
  }
</style>