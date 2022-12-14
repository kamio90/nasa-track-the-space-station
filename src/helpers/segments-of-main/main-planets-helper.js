import { earth } from "../../data/planets/earth";
import { jupiter } from "../../data/planets/jupiter";
import { mars } from "../../data/planets/mars";
import { mercury } from "../../data/planets/mercury";
import { neptune } from "../../data/planets/neptun";
import { PlanetsEnum } from "../../data/planets/planets-enum";
import { saturn } from "../../data/planets/saturn";
import { sun } from "../../data/planets/sun";
import { uranus } from "../../data/planets/uranus";
import { venus } from "../../data/planets/venus";

/**
 * It sets up the scene and loads the models for all the planets
 * @param scene - The scene that the planet will be added to.
 */
export const MainPlanetsHelper = (scene) => {
  sun.setupScene(scene);
  sun._LoadFBXModel(PlanetsEnum.sun, 0.00001);
  mercury.setupScene(scene);
  mercury._LoadFBXModel(PlanetsEnum.mercury, 0.1);
  venus.setupScene(scene);
  venus._LoadFBXModel(PlanetsEnum.venus, 0.1);
  earth.setupScene(scene);
  earth._LoadFBXModel(PlanetsEnum.earth, 0.1);
  mars.setupScene(scene);
  mars._LoadFBXModel(PlanetsEnum.mars, 0.1);
  jupiter.setupScene(scene);
  jupiter._LoadFBXModel(PlanetsEnum.jupiter, 0.01);
  saturn.setupScene(scene);
  saturn._LoadFBXModel(PlanetsEnum.saturn, 0.01);
  uranus.setupScene(scene);
  uranus._LoadFBXModel(PlanetsEnum.uranus, 0.05);
  neptune.setupScene(scene);
  neptune._LoadFBXModel(PlanetsEnum.neptune, 0.05);
};
