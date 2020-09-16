import Vue from "vue";
import {Action, Mutation, Module, VuexModule} from 'vuex-module-decorators';
import {namespace} from 'vuex-class';
import Field from "@/models/Field";
import Operation from "@/models/Operation";
import Services from "@/services";
import OperationFilter from "@/models/OperationFilter";
import OperationsSort from "@/models/OperationsSort";

export const vOperationsNamespace = "vOperations";
export const vOperationsModule = namespace(vOperationsNamespace);

@Module({namespaced: true, stateFactory: true})
export default class vOperations extends VuexModule {
  field: Field = new Field();
  operations: Operation[] = [];

  operationsFilter: OperationFilter | null = null;
  operationSort: OperationsSort | null = null;


  @Mutation resetSort() {
    if(this.operationSort) {
      this.operationSort.reset();
    }
    this.operationSort = null;
  }
  @Mutation setSort(sort: OperationsSort) {
    if(this.operationSort !== sort || !this.operationSort){
      this.operationSort = sort;
    }
    this.operationSort.toggle();
  }

  @Mutation setFilter(filter: OperationFilter) {
    this.operationsFilter = filter;
  }

  @Mutation setOperations(operations: Operation[] = []) {
    this.operations = operations;
  }

  @Action({rawError: true, commit: 'setOperations'})
  async loadOperations() {
    return await Services.Field.getOperations();
  }

  get filteredOperations() {
    let operations = this.operations.filter(this.operationsFilter ? this.operationsFilter.filter : () => true);
    this.operationSort && operations.sort(this.operationSort.sort);
    return operations;
  }
}