import Operation from "@/models/Operation";

export default class OperationFilter {
  name: string = '';
  filter: (operation: Operation) => boolean = () => true;
}