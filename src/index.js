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
const earth = new Planet(
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
  scene,
  "https://solartextures.b-cdn.net/2k_jupiter.jpg"
);
const mars = new Planet(
  2,
  "mars",
  new ThirdDimensionVector(-10, -10, -10),
  new ThirdDimensionVector(-10, -10, -10),
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
  scene,
  "https://solartextures.b-cdn.net/2k_jupiter.jpg"
);

earth._LoadFBXModel(
  "https://threejs.org/examples/models/fbx/Samba%20Dancing.fbx"
);
// scene.addObjToScene(earthMesh, earth.getID, earth.getName());
// scene.addObjToScene(marsMesh, mars.getID, mars.getName());

var lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.addObjToScene(lights[0]);
scene.addObjToScene(lights[1]);
scene.addObjToScene(lights[2]);
console.log(scene);

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
