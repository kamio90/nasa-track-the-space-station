import * as THREE from "three";
import "./style/main.css";
/**
 * GUI Controls
 */
import * as dat from "dat.gui";
import { FetchData } from "./api/fetch-data";
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

//api call
FetchData();
setInterval(FetchData, 30000);

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
let mercury_timer = 0;
let venus_timer = 0;
let earth_timer = 0;
let mars_timer = 0;
let jupiter_timer = 0;
let saturn_timer = 0;
let uranus_timer = 0;
let neptune_timer = 0;

const tick = () => {
  mercury_timer += 0.01;
  venus_timer += 0.01;
  earth_timer += 0.01;
  mars_timer += 0.01;
  jupiter_timer += 0.01;
  saturn_timer += 0.01;
  uranus_timer += 0.01;
  neptune_timer += 0.01;

  if (mercury.mesh != undefined) {
    mercury.mesh.position.x = 50 * Math.cos(mercury_timer);
    mercury.mesh.position.z = 50 * Math.sin(mercury_timer);
    mercury.updatePlanetPosition();
  }

  if (venus.mesh != undefined) {
    venus.mesh.position.x = 100 * Math.cos(venus_timer);
    venus.mesh.position.z = 100 * Math.sin(venus_timer);
    venus.updatePlanetPosition();
  }

  if (earth.mesh != undefined) {
    earth.mesh.position.x = 150 * Math.cos(earth_timer);
    earth.mesh.position.z = 150 * Math.sin(earth_timer);
    earth.updatePlanetPosition();
  }

  if (mars.mesh != undefined) {
    mars.mesh.position.x = 200 * Math.cos(mars_timer);
    mars.mesh.position.z = 200 * Math.sin(mars_timer);
    mars.updatePlanetPosition();
  }

  if (jupiter.mesh != undefined) {
    jupiter.mesh.position.x = 250 * Math.cos(jupiter_timer);
    jupiter.mesh.position.z = 250 * Math.sin(jupiter_timer);
    jupiter.updatePlanetPosition();
  }

  if (saturn.mesh != undefined) {
    saturn.mesh.position.x = 300 * Math.cos(saturn_timer);
    saturn.mesh.position.z = 300 * Math.sin(saturn_timer);
    saturn.updatePlanetPosition();
  }

  if (uranus.mesh != undefined) {
    uranus.mesh.position.x = 350 * Math.cos(uranus_timer);
    uranus.mesh.position.z = 350 * Math.sin(uranus_timer);
    uranus.updatePlanetPosition();
  }

  if (neptune.mesh != undefined) {
    neptune.mesh.position.x = 400 * Math.cos(neptune_timer);
    neptune.mesh.position.z = 400 * Math.sin(neptune_timer);
    neptune.updatePlanetPosition();
  }

  // Update controls
  controls.getControls().update();
  //earth.movePlanet
  // Render
  renderer.render(scene.getScene(), camera.getCamera());

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
