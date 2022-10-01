import * as THREE from "three";
import "./style/main.css";
/**
 * GUI Controls
 */
import * as dat from "dat.gui";
import { CustomCamera } from "./class/threejs/custom-camera";
import { CustomControls } from "./class/threejs/custom-controlls";
import { CustomRenderer } from "./class/threejs/custom-renderer";
import { CustomScene } from "./class/threejs/custom-scene";
import { earth } from "./data/planets/earth";
const gui = new dat.GUI();

const canvas = document.querySelector("canvas.webgl");
const scene = new CustomScene();
earth.setupScene(scene);
earth._LoadFBXModel("http://localhost:8000/sphere1.fbx", 0.2);

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
  // Update controls
  controls.getControls().update();
  // Render
  renderer.render(scene.getScene(), camera.getCamera());

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
