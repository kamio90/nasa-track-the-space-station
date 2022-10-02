import * as THREE from "three";
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let tmp_Camera;
let tmp_Scene;
export const MainChangeColorOnClickHelper = (renderer, camera, scene) => {
  tmp_Camera = camera;
  tmp_Scene = scene;
  renderer.getRenderer().domElement.addEventListener("click", onClick, false);
};

const onClick = () => {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, tmp_Camera.getCamera());

  var intersects = raycaster.intersectObject(tmp_Scene, true);

  if (intersects.length > 0) {
    var object = intersects[0].object;

    object.material.color.set(Math.random() * 0xffffff);
  }
};
