import Vue from "vue";
import OperationsSort from "@/models/OperationsSort";

export default class VTableColumn {
  name: string = '';
  width: string = '1fr';

  sortable: boolean = true;
  sort: OperationsSort = new OperationsSort();
  renderCell: Vue | null = null;

  public static createFromArray(cols: VTableColumn[]): VTableColumn[] {
    return cols.map(col => Object.assign(new VTableColumn(), col));
  }
}