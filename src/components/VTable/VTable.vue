<template>
  <div class="v-table" :style="gridCssVariables">
    <v-table-header :cols="cols" />
    <v-table-content :rows="rows" :cols="cols"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VTableHeader from "@/components/VTable/components/VTableHeader.vue";
  import VTableContent from "@/components/VTable/components/VTableContent.vue";
  import VTableColumn from './models/VTableColumn';

  @Component({
    components: {
      VTableHeader,
      VTableContent
    }
  })
  export default class VTable extends Vue {
    @Prop() cols !: VTableColumn[];
    @Prop() rows !: [];


    get gridCssVariables() {
      return {
        '--v-table__grid__template' : this.cols.map(col => col.width).join(' ') //.map(col => ` minmax(1fr, ${col.width})`).join(' ')
      }
    }
  }
</script>

<style lang="scss">
  .v-table {
    display: flex;
    flex-direction: column;
  }
</style>