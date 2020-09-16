<template>
  <div class="v-table-content">
    <v-table-row v-for="(row, index) in filteredOperations"
                 :key="index" :row="row" :cols="cols"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VTableRow from "@/components/VTable/components/VTableRow.vue";
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import {vOperationsModule} from "@/store/vOperations.module";
  import Operation from "@/models/Operation";

  @Component({
    components: {
      VTableRow
    }
  })
  export default class VTableContent extends Vue {
    @Prop() cols !: VTableColumn[];
    @vOperationsModule.Getter filteredOperations !: Operation[];

  }
</script>

<style lang="scss">
  .v-table-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>