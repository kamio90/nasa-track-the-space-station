import { Planet } from "../../class/structural/planet";
import { ThirdDimensionVector } from "../../class/types/third-dimension-vector";

/* Creating a new instance of the Planet class. */
export const earth = new Planet(
  4,
  "earth",
  new ThirdDimensionVector(10, 10, 10),
  new ThirdDimensionVector(10, 10, 10),
  {
    points: [
      new ThirdDimensionVector(10, 10, 10),
      new ThirdDimensionVector(20, 20, 20),
    ],
  },
  ["www.google.com", "www.google.com"],
  new ThirdDimensionVector(150, 0, 0)
);
