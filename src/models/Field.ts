export enum Culture {
  WINTER_WHEAT = 0,
  SPRING_WHEAT
}

export default class Field {
  //добавим заглушку
  constructor(public name = "112", public culture: Culture = Culture.WINTER_WHEAT) {}
}