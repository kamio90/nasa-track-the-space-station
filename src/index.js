import { CustomCamera } from "./class/threejs/custom-camera";
import { CustomControls } from "./class/threejs/custom-controlls";
import { CustomRenderer } from "./class/threejs/custom-renderer";
import { CustomScene } from "./class/threejs/custom-scene";
import { MainChangeColorOnClickHelper } from "./helpers/segments-of-main/main-change-color-on-click-helper";
import { MainClockHelper } from "./helpers/segments-of-main/main-clock-helper";
import { MainGridHelper } from "./helpers/segments-of-main/main-grid-helper";
import { MainISSHelper } from "./helpers/segments-of-main/main-iss-helper";
import { MainISSMoveHelper } from "./helpers/segments-of-main/main-iss-move-helper";
import { MainLightsHelper } from "./helpers/segments-of-main/main-lights-helper";
import { MainPlanetsHelper } from "./helpers/segments-of-main/main-planets-helper";
import { MainPlanetsMoveHelper } from "./helpers/segments-of-main/main-planets-move-helper";
import { MainResizeHelper } from "./helpers/segments-of-main/main-resize-helper";
import { MainUIHelper } from "./helpers/UI/main-ui-helper";
import "./style/main.css";
import * as THREE from 'three';

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
MainClockHelper();
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

var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
var loader = new THREE.TextureLoader(),
  texture = loader.load("http://localhost:8000/texture/RandomizedSkymap.t4_04096x02048.jpg");
var material = new THREE.MeshPhongMaterial({
  map: texture,
});
var sky = new THREE.Mesh(skyGeo, material);
sky.material.side = THREE.BackSide;
scene.addObjToScene(sky);


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

  //ISS move
  MainISSMoveHelper(iss, controls, iss_timer);

  //Planets make circle
  MainPlanetsMoveHelper(
    mercury_timer,
    venus_timer,
    earth_timer,
    mars_timer,
    jupiter_timer,
    uranus_timer,
    neptune_timer
  );

  // Update controls
  controls.getControls().update();
  // Clicker Color change
  MainChangeColorOnClickHelper(renderer, camera, scene);
  // Render
  renderer.render(scene.getScene(), camera.getCamera());
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
