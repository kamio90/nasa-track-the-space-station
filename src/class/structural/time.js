import { DaysEnum } from "../../data/time/days-enum";
import { MonthsEnum } from "../../data/time/months-enum";
import { YearsEnum } from "../../data/time/years-enum";

export class Time {
  constructor() {
    this.spaceElements = [];
    this.year = YearsEnum[1998];
    this.month = MonthsEnum.April;
    this.day = DaysEnum[1];
  }

  _createSpaceElementObject() {}

  getFullDate() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
    };
  }
}
