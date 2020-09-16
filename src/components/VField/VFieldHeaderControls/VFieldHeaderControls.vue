<template>
  <div class="v-field-header-controls">
    <v-field-header-filters
      :filters="filters"
      v-model="filter"/>
    <v-field-operation-add-button />
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VFieldHeaderFilters from "@/components/VField/VFieldHeaderControls/VFieldHeaderFilters.vue";
  import OperationFilter from "@/models/OperationFilter";
  import Operation from '@/models/Operation';
  import {vOperationsModule} from "@/store/vOperations.module";
  import VFieldOperationAddButton from "@/components/VField/VFieldHeaderControls/VFieldOperationAddButton.vue";
  import moment from "moment";

  @Component({
    components: {
      VFieldHeaderFilters,
      VFieldOperationAddButton
    }
  })
  export default class VFieldHeaderControls extends Vue {

    @vOperationsModule.Action loadOperations;

    @vOperationsModule.Mutation setFilter;

    @vOperationsModule.State operationsFilter !: OperationFilter;

    filters: OperationFilter[] = [
      {
        name: 'Запланированные операции',
        filter: (operation: Operation) => {
          return operation.date.moment().diff(moment()) >= 0;
        }
      },
      {
        name: 'Выполненные операции',
        filter: (operation: Operation) => {
          return operation.date.moment().diff(moment()) < 0;
        }
      }
    ];

    async created(){
      this.setFilter(this.filters[0]);
    }

    get filter() {
      return this.operationsFilter;
    }

    set filter(filter: OperationFilter){
      this.setFilter(filter);
      this.loadOperations();
    }
  }
</script>

<style lang="scss">
  .v-field-header-controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>