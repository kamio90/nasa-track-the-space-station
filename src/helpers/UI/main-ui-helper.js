import { MonthsEnum } from "../../data/time/months-enum";
import { YearsEnum } from "../../data/time/years-enum";
import { CreateDivHelper } from "./create-div-helper";
/**
 * It creates a button that when clicked, shows a navigation bar
 */
export const MainUIHelper = () => {
  const btn = document.querySelector(".left-nav-bar-btn-menu");
  btn.addEventListener("click", () => {
    const nav = document.querySelector(".left-nav-bar-container");
    btn.classList.toggle("show");
    nav.classList.toggle("show");
  });
  const arrayOfPartsOfYear = [];
  for (const property in YearsEnum) {
    arrayOfPartsOfYear.push(CreateDivHelper(YearsEnum[property]));
    document.querySelector(".year-holder").innerHTML = CreateDivHelper(
      YearsEnum[property]
    );
  }
  document.querySelector(".year-holder").innerHTML =
    arrayOfPartsOfYear.join("");
  const arrayOfPartsOfMonths = [];
  for (const property in MonthsEnum) {
    arrayOfPartsOfMonths.push(CreateDivHelper(property));
  }
  document.querySelector(".month-holder").innerHTML =
    arrayOfPartsOfMonths.join("");
};
