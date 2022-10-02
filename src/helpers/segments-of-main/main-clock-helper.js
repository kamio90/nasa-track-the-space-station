const target = document.querySelector(".clock");
const targetx2 = document.querySelector(".x2");
const targetx5 = document.querySelector(".x5");
const targetx10 = document.querySelector(".x10");
export const MainClockHelper = () => {
  startTime();
  ButtonsClickHandler();
};

const ButtonsClickHandler = () => {
  targetx2.addEventListener("click", () => {
    if (TIME_MULTIPLY != 2) TIME_MULTIPLY *= 2;
    else TIME_MULTIPLY = 1;

    console.log("TIME_MULTIPLY", TIME_MULTIPLY);
  });
  targetx5.addEventListener("click", () => {
    if (TIME_MULTIPLY != 5) TIME_MULTIPLY *= 5;
    else TIME_MULTIPLY = 1;

    console.log("TIME_MULTIPLY", TIME_MULTIPLY);
  });
  targetx10.addEventListener("click", () => {
    if (TIME_MULTIPLY != 10) TIME_MULTIPLY *= 10;
    else TIME_MULTIPLY = 1;

    console.log("TIME_MULTIPLY", TIME_MULTIPLY);
  });
};

const startTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  target.innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
};

const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
};

export let TIME_MULTIPLY = 1;
