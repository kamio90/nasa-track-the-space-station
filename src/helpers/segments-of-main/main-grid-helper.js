import * as THREE from "three";
/**
 * It creates a grid helper object and adds it to the scene
 * @param scene - The scene object
 */
export const MainGridHelper = (scene) => {
  const size = 100;
  const divisions = 10;
  const gridHelper = new THREE.GridHelper(size, divisions);
  //scene.addObjToScene( gridHelper );
};
