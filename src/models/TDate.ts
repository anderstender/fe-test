import moment, {Moment} from "moment";

export interface ITDate {
  year: number;   // Год
  month: number;  // Месяц 1 - 12
  day: number;    // День месяца 1 - 31
}

export default class TDate {
  year: number;   // Год
  month: number;  // Месяц 1 - 12
  day: number;    // День месяца 1 - 31

  constructor (args: ITDate) {
    const { year, month, day } = args;
    this.year = year;
    this.month = month;
    this.day = day;
  }

  moment(): Moment {
    return moment().year(this.year).month(this.month).date(this.day).hours(0).minutes(0).hours(0)
  }
}