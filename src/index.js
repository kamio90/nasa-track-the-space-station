import * as THREE from "three";
import { CustomCamera } from "./class/threejs/custom-camera";
import { CustomControls } from "./class/threejs/custom-controlls";
import { CustomRenderer } from "./class/threejs/custom-renderer";
import { CustomScene } from "./class/threejs/custom-scene";
import { earth } from "./data/planets/earth";
import { jupiter } from "./data/planets/jupiter";
import { mars } from "./data/planets/mars";
import { mercury } from "./data/planets/mercury";
import { neptune } from "./data/planets/neptun";
import { saturn } from "./data/planets/saturn";
import { uranus } from "./data/planets/uranus";
import { venus } from "./data/planets/venus";
import { MainGridHelper } from "./helpers/segments-of-main/main-grid-helper";
import { MainISSHelper } from "./helpers/segments-of-main/main-iss-helper";
import { MainLightsHelper } from "./helpers/segments-of-main/main-lights-helper";
import { MainPlanetsHelper } from "./helpers/segments-of-main/main-planets-helper";
import { MainResizeHelper } from "./helpers/segments-of-main/main-resize-helper";
import { MainUIHelper } from "./helpers/UI/main-ui-helper";
import "./style/main.css";

//Global Variables
const canvas = document.querySelector("canvas.webgl");
const scene = new CustomScene();
const camera = new CustomCamera();
const controls = new CustomControls(camera.getCamera(), canvas);
const renderer = new CustomRenderer({
  canvas: canvas,
  antialias: true,
});
//FRONT - UI
MainUIHelper();
//Load Planets Models
MainPlanetsHelper(scene);
//Load Grid
MainGridHelper(scene);
//Load Lights
MainLightsHelper(scene);
//Load ISS
const iss = MainISSHelper(scene);
//Resize Canvas
MainResizeHelper(camera);

//RandomMethods
scene.addObjToScene(camera.getCamera());

//api call
// FetchData();
// setInterval(FetchData, 30000);

// Timers For Planets
let mercury_timer = 0;
let venus_timer = 0;
let earth_timer = 0;
let mars_timer = 0;
let jupiter_timer = 0;
let saturn_timer = 0;
let uranus_timer = 0;
let neptune_timer = 0;
let iss_timer = 0;

controls.getControls().update();

const tick = () => {
  mercury_timer += 0.005;
  venus_timer += 0.0044;
  earth_timer += 0.0033;
  mars_timer += 0.0032;
  jupiter_timer += 0.0031;
  saturn_timer += 0.003;
  uranus_timer += 0.002;
  neptune_timer += 0.001;
  iss_timer += 0.0001;

  if (iss.partsOfModel.length != 0) {
    controls.getControls().target = new THREE.Vector3(
      iss.partsOfModel[0].mesh.position.x,
      iss.partsOfModel[0].mesh.position.y,
      iss.partsOfModel[0].mesh.position.z
    );

    iss.move(
      new THREE.Vector3(
        earth.mesh.position.x + 20 * Math.cos(iss_timer),
        0,
        earth.mesh.position.z + 20 * Math.sin(iss_timer)
      )
    );
  }

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
  // Render
  renderer.render(scene.getScene(), camera.getCamera());
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
