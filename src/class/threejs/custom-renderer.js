import * as THREE from "three";
export class CustomRenderer {
  constructor(
    setup,
    width = window.innerWidth,
    height = window.innerHeight,
    pixelRatio = Math.min(window.devicePixelRatio, 2)
  ) {
    this.renderer = new THREE.WebGLRenderer(setup);
    this.width = width;
    this.height = height;
    this.pixelRatio = pixelRatio;
    this.init();
  }

  //Initialize
  init() {
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
  }

  //Controller
  render(scene, camera) {
    this.renderer.render(scene, camera);
  }

  //Getters
  getRenderer() {
    return this.renderer;
  }
}
