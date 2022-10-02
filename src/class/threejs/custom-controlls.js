import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export class CustomControls {
  /**
   * The constructor function takes in a camera object, a canvas element, and a few other optional
   * parameters, and returns an OrbitControls object
   * @param cameraObj - The camera object that you want to control.
   * @param canvasElement - The canvas element that the controls will be attached to.
   * @param [enableDamping=true] - If true, the camera will move smoothly to the target position.
   * @param [autoRotate=false] - If true, the camera will rotate around the scene.
   * @param [enablePan=false] - Enables panning.
   * @param [dampingFactor=0.05] - The amount of damping applied to the camera's rotation.
   * @param [maxDistance=1000] - The maximum distance the camera can be from the object.
   * @param [minDistance=30] - The minimum distance the camera can be from the object.
   * @param [touches] - This is an object that defines what each touch does. The default is to rotate
   * on one touch and dolly/pan on two touches.
   */
  constructor(
    cameraObj,
    canvasElement,
    enableDamping = true,
    autoRotate = false,
    enablePan = false,
    dampingFactor = 0.05,
    maxDistance = 1000,
    minDistance = 30,
    touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }
  ) {
    this.controls = new OrbitControls(cameraObj, canvasElement);
    this.enableDamping = enableDamping;
    this.autoRotate = autoRotate;
    this.enablePan = enablePan;
    this.dampingFactor = dampingFactor;
    this.maxDistance = maxDistance;
    this.minDistance = minDistance;
    this.touches = touches;
    this.init();
  }

  //Initialize
  /**
   * The init() function sets the initial values of the OrbitControls properties
   */
  init() {
    this.controls.enableDamping = this.enableDamping;
    this.controls.autoRotate = this.autoRotate;
    this.controls.enablePan = this.enablePan;
    this.controls.dampingFactor = this.dampingFactor;
    this.controls.maxDistance = this.maxDistance;
    this.controls.minDistance = this.minDistance;
    this.controls.touches = this.touches;
  }

  //Getters
  /**
   * It returns the controls
   * @returns The controls property of the form.
   */
  getControls() {
    return this.controls;
  }
}
