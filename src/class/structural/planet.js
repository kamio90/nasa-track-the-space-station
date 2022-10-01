import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { CustomText } from "../threejs/custom-text";
import { ThirdDimensionVector } from "../types/third-dimension-vector";
import { SpaceObject } from "./space-object";

export class Planet extends SpaceObject {
  constructor(
    id,
    name,
    wordPosition,
    wordRotation,
    wordPath,
    webLinks,
    vector = new ThirdDimensionVector(0, 0, 0)
  ) {
    super(id, name, wordPosition, wordRotation, wordPath, webLinks);
    this.position = vector;
  }

  setX(x) {
    this.position.setX(x);
  }

  setY(y) {
    this.position.setY(y);
  }

  setZ(z) {
    this.position.setZ(z);
  }

  getX() {
    return this.position.getX();
  }

  getY() {
    return this.position.getY();
  }

  getZ() {
    return this.position.getZ();
  }

  //Initializations
  setupScene(scene) {
    this.scene = scene;
  }

  //Handlers
  handleRotation() {
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.z += 0.01 * Math.sin(1);
  }

  _LoadFBXModel(url, scale) {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(url, (obj) => {
      obj.scale.multiplyScalar(scale);
      obj.position.x = this.position.getX();
      obj.position.y = this.position.getY();
      obj.position.z = this.position.getZ();
      obj.updateMatrix();
      this.mesh = obj;
      this.scene.addObjToScene(this.mesh);
    });
    this.createOrbit();
    this.createLabel();
  }

  createLabel(){
    let text = new CustomText(this.name).getText();
    console.log(text);
    text.position.set(this.position.getX(),80,this.position.getZ());
    this.scene.addObjToScene(text);
  }

  createOrbit() {
    const geometry = new THREE.RingGeometry(
      this.position.getX(),
      this.position.getX() + 0.3,
      40
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI / 2;
    this.scene.addObjToScene(mesh);
  }

  movePlanet(vector) {
    this.position = this.position.addThirdDimensionVector(vector);
    this.mesh.position.x = this.position.getX();
    this.mesh.position.y = this.position.getY();
    this.mesh.position.z = this.position.getZ();
    this.mesh.updateMatrix();
  }
}
