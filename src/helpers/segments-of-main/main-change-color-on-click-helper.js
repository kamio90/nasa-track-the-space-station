import * as THREE from "three";
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let tmp_Camera;
let tmp_Scene;
/**
 * It adds a click event listener to the renderer's domElement
 * @param renderer - The renderer object that you created in the previous step.
 * @param camera - The camera that is being used to render the scene.
 * @param scene - The scene that contains the objects you want to change the color of.
 */
export const MainChangeColorOnClickHelper = (renderer, camera, scene) => {
  tmp_Camera = camera;
  tmp_Scene = scene;
  renderer.getRenderer().domElement.addEventListener("click", onClick, false);
};

/**
 * When the user clicks on the screen, we get the mouse coordinates, convert them to 3D coordinates,
 * and then check if the mouse is over any of the objects in the scene. If it is, we change the color
 * of the object
 */
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
