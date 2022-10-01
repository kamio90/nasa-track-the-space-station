import * as THREE from "three";
import "./style/main.css";
/**
 * GUI Controls
 */
import * as dat from "dat.gui";
import { Planet } from "./class/structural/planet";
import { CustomCamera } from "./class/threejs/custom-camera";
import { CustomControls } from "./class/threejs/custom-controlls";
import { CustomRenderer } from "./class/threejs/custom-renderer";
import { CustomScene } from "./class/threejs/custom-scene";
import { ThirdDimensionVector } from "./class/types/third-dimension-vector";
const gui = new dat.GUI();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new CustomScene();
// const scene = new THREE.Scene()

/**
 * Object
 */
const planet = new Planet(
  1,
  "earth",
  new ThirdDimensionVector(10, 10, 10),
  new ThirdDimensionVector(10, 10, 10),
  {
    points: [
      new ThirdDimensionVector(10, 10, 10),
      new ThirdDimensionVector(20, 20, 20),
    ],
  },
  ["www.google.com", "www.google.com"],
  100,
  10,
  10,
  new THREE.MeshBasicMaterial({ color: 0x15aacc })
);
const mesh = planet.getMesh();
scene.addObjToScene(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.getCamera().aspect = sizes.width / sizes.height;
  camera.getCamera().updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new CustomCamera();
scene.addObjToScene(camera.getCamera());

// Controls
const controls = new CustomControls(camera.getCamera(), canvas);
/**
 * Renderer
 */
const renderer = new CustomRenderer({
  canvas: canvas,
  antialias: true,
});

/**
 * Animate
 */
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.getControls().update();
  // Render
  renderer.render(scene.getScene(), camera.getCamera());

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
