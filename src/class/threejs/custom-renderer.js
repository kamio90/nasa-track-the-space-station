import * as THREE from "three";
export class CustomRenderer {
  /**
   * The constructor function is called when we create a new instance of the class
   * @param setup - This is an object that contains the renderer's setup.
   * @param [width] - The width of the canvas.
   * @param [height] - The height of the canvas.
   * @param [pixelRatio] - The pixel ratio of the device.
   */
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
  /**
   * It sets the size of the renderer to the width and height of the canvas, and sets the pixel ratio
   * to the pixel ratio of the canvas
   */
  init() {
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
  }

  //Controller
  /**
   * It renders the scene and camera
   * @param scene - The scene to render.
   * @param camera - The camera object that will be used to render the scene.
   */
  render(scene, camera) {
    this.renderer.render(scene, camera);
  }

  //Getters
  /**
   * This function returns the renderer.
   * @returns The renderer.
   */
  getRenderer() {
    return this.renderer;
  }
}
