import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ThirdDimensionVector } from "../types/third-dimension-vector";
import { SpaceObject } from "./space-object";
import * as THREE from "three";

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
  }

  createOrbit(){
    const geometry = new THREE.RingGeometry( this.position.getX(), this.position.getX() + 0.3, 40);
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = Math.PI / 2;
    this.scene.addObjToScene( mesh );
  }

  movePlanet(vector) {
    this.position = this.position.addThirdDimensionVector(vector);
    this.mesh.position.x = this.position.getX();
    this.mesh.position.y = this.position.getY();
    this.mesh.position.z = this.position.getZ();
    this.mesh.updateMatrix();
  }
}
