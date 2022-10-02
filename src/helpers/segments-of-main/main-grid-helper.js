import * as THREE from "three";
export const MainGridHelper = (scene) => {
  const size = 100;
  const divisions = 10;
  const gridHelper = new THREE.GridHelper(size, divisions);
  //scene.addObjToScene( gridHelper );
};
