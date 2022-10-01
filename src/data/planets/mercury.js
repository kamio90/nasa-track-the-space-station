import { Planet } from "../../class/structural/planet";
import { ThirdDimensionVector } from "../../class/types/third-dimension-vector";

export const mercury = new Planet(
  2,
  "mercury",
  new ThirdDimensionVector(10, 10, 10),
  new ThirdDimensionVector(10, 10, 10),
  {
    points: [
      new ThirdDimensionVector(10, 10, 10),
      new ThirdDimensionVector(20, 20, 20),
    ],
  },
  ["www.google.com", "www.google.com"],
  new ThirdDimensionVector(50,0,0),
);
