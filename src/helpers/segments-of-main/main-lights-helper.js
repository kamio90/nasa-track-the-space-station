import * as THREE from "three";
/**
 * It creates a point light and an ambient light, and adds them to the scene
 * @param scene - The scene object that the lights will be added to.
 */
export const MainLightsHelper = (scene) => {
  const lights = [];
  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[1] = new THREE.AmbientLight(0xffffff, 0.1);

  lights[0].position.set(0, 500, 0);
  lights[0].intensity = 2;

  scene.addObjToScene(lights[0]);
  scene.addObjToScene(lights[1]);
};