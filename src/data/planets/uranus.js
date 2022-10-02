import { Planet } from "../../class/structural/planet";
import { ThirdDimensionVector } from "../../class/types/third-dimension-vector";

/* Creating a new instance of the Planet class. */
export const uranus = new Planet(
  8,
  "uranus",
  new ThirdDimensionVector(10, 10, 10),
  new ThirdDimensionVector(10, 10, 10),
  {
    points: [
      new ThirdDimensionVector(10, 10, 10),
      new ThirdDimensionVector(20, 20, 20),
    ],
  },
  ["www.google.com", "www.google.com"],
  new ThirdDimensionVector(350, 0, 0)
);
