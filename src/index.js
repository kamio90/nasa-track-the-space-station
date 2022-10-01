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
import { jupiter } from "./data/planets/jupiter";
import { mars } from "./data/planets/mars";
import { mercury } from "./data/planets/mercury";
import { neptune } from "./data/planets/neptun";
import { PlanetsEnum } from "./data/planets/planets-enum";
import { saturn } from "./data/planets/saturn";
import { sun } from "./data/planets/sun";
import { uranus } from "./data/planets/uranus";
import { venus } from "./data/planets/venus";

const gui = new dat.GUI();

const canvas = document.querySelector("canvas.webgl");
const scene = new CustomScene();

const size = 100;
const divisions = 10;

const gridHelper = new THREE.GridHelper(size, divisions);
//scene.addObjToScene( gridHelper );

sun.setupScene(scene);
sun._LoadFBXModel(PlanetsEnum.sun, 0.00001);
mercury.setupScene(scene);
mercury._LoadFBXModel(PlanetsEnum.mercury, 0.1);
venus.setupScene(scene);
venus._LoadFBXModel(PlanetsEnum.venus, 0.1);
earth.setupScene(scene);
earth._LoadFBXModel(PlanetsEnum.earth, 0.1);
mars.setupScene(scene);
mars._LoadFBXModel(PlanetsEnum.mars, 0.1);
jupiter.setupScene(scene);
jupiter._LoadFBXModel(PlanetsEnum.jupiter, 0.01);
saturn.setupScene(scene);
saturn._LoadFBXModel(PlanetsEnum.saturn, 0.01);
uranus.setupScene(scene);
uranus._LoadFBXModel(PlanetsEnum.uranus, 0.05);
neptune.setupScene(scene);
neptune._LoadFBXModel(PlanetsEnum.neptune, 0.05);

var lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.AmbientLight(0xffffff, 0.1);

lights[0].position.set(0, 500, 0);

lights[0].intensity = 2;

scene.addObjToScene(lights[0]);
scene.addObjToScene(lights[1]);

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
let saturn_timer = 0;
const tick = () => {
  saturn_timer += 0.1;

  saturn.setX(20 * Math.cos(saturn_timer));
  saturn.setZ(20 * Math.sin(saturn_timer));

  if (saturn.mesh != undefined) {
    console.log(saturn.mesh);
    saturn.mesh.updateMatrix();
  }
  saturn.updatePlanetPosition();

  // Update controls
  controls.getControls().update();
  //earth.movePlanet
  // Render
  renderer.render(scene.getScene(), camera.getCamera());

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
