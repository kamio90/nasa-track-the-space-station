import * as THREE from "three";
import {
  ClearISSPartDivHelper,
  CreateISSPartDivHelper,
} from "../UI/create-iss-part-div-helper";
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let tmp_Camera;
let tmp_Scene;
let selected;
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

  var intersects = raycaster.intersectObject(tmp_Scene.getScene(), true);

  if (selected != undefined) {
    selected.object.material.map((color) => {
      color.color = new THREE.Color(0.45, 0.45, 0.45);
    });
    ClearISSPartDivHelper();
  }

  if (intersects.length > 0) {
    if (intersects[0].material == undefined || intersects[0].material == null) {
      intersects[0].object.material.map((color) => {
        color.color = new THREE.Color(90, 252, 3);
      });
      selected = intersects[0];
      console.log(selected);
      CreateISSPartDivHelper(selected.object.name);
    }
  }
};
