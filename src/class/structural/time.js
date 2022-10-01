import { DaysEnum } from "../../data/time/days-enum";
import { MonthsEnum } from "../../data/time/months-enum";
import { YearsEnum } from "../../data/time/years-enum";
import { CreateFullDateHelper } from "../../helpers/time/create-full-date-helper";
import { ThirdDimensionVector } from "../types/third-dimension-vector";

export class Time {
  constructor(
    year = YearsEnum[1998],
    month = MonthsEnum.April,
    day = DaysEnum[1]
  ) {
    this.spaceElements = [];
    this.year = year;
    this.month = month;
    this.day = day;
  }

  _createSpaceElementObject(
    id,
    name,
    currentPosition,
    currentYear,
    currentMonth,
    currentDay,
    currentFullDate
  ) {
    this.spaceElements.push({
      id,
      name,
      currentPosition,
      currentYear,
      currentMonth,
      currentDay,
      currentFullDate,
      pastData: [this._createPastTimeArray()],
    });
  }

  _createPastTimeArray() {
    //TODO: implement this with api
    return {
      date: CreateFullDateHelper(
        YearsEnum[1998],
        MonthsEnum.April,
        DaysEnum[1]
      ),
      position: new ThirdDimensionVector(0, 0, 0),
    };
  }

  getFullDate() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
    };
  }
}
