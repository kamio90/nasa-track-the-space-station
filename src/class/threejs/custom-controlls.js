import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export class CustomControls {
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
  getControls() {
    return this.controls;
  }
}
