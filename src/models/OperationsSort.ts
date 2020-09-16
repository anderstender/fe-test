export default class OperationsSort {
  asc: (row1, row2) => number = (row1, row2) => 1;
  desc: (row1, row2) => number = (row1, row2) => -1;

  constructor(asc = (row1, row2) => 1, desc = (row1, row2) => -1) {
    this.asc = asc;
    this.desc = desc;
  }

  private currentSort: (row1, row2) => number = () => 0;

  get sort() {
    return this.currentSort;
  }

  toggle() {
    this.currentSort = this.currentSort === this.desc ? this.asc : this.desc;
  }

  reset() {
    this.currentSort = () => 0;
  }

  get isAsc() {
    return this.currentSort === this.asc;
  }

  get isDesc() {
    return this.currentSort === this.desc;
  }
}