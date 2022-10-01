import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./style/main.css";
/**
 * GUI Controls
 */
import * as dat from "dat.gui";
import { Planet } from "./class/structural/planet";
import { CustomCamera } from "./class/threejs/custom-camera";
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
const controls = new OrbitControls(camera.getCamera(), canvas);
controls.enableDamping = true;
controls.autoRotate = true;
// controls.enableZoom = false
controls.enablePan = false;
controls.dampingFactor = 0.05;
controls.maxDistance = 1000;
controls.minDistance = 30;
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
};
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y += 0.01 * Math.sin(1);
  mesh.rotation.y += 0.01 * Math.sin(1);
  mesh.rotation.z += 0.01 * Math.sin(1);

  // Update controls
  controls.update();
  // Render
  renderer.render(scene.getScene(), camera.getCamera());

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
