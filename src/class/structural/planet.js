import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { SpaceObject } from "./space-object";

export class Planet extends SpaceObject {
  constructor(
    id,
    name,
    wordPosition,
    wordRotation,
    wordPath,
    webLinks,
    width,
    height,
    radius,
    scene,
    materialUrl = null
  ) {
    super(id, name, wordPosition, wordRotation, wordPath, webLinks);
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.scene = scene;
    this.bufferGeometry = this._createBufferGeometry();
    this.material = this._createMaterial(materialUrl);
    this.mesh = this._createMesh();
  }

  //Handlers
  handleRotation() {
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.z += 0.01 * Math.sin(1);
  }

  _LoadFBXModel(url) {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(url, (obj) => {
      this.scene.addObjToScene(obj);
    });
  }

  //Helpers
  _createMesh() {
    return new THREE.Mesh(this.bufferGeometry, this.material);
  }

  async _createMaterial(materialUrl) {
    if (materialUrl == null) return new THREE.MeshNormalMaterial();
    const loader = new THREE.TextureLoader();
    // const map = await this._createTexture(materialUrl);
    const map = new THREE.TextureLoader().load(
      "https://solartextures.b-cdn.net/2k_jupiter.jpg"
    );
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(4, 4);
    console.log(map);
    return new THREE.MeshBasicMaterial({
      map,
    });
  }

  async _createTexture(texture) {
    const loader = new THREE.TextureLoader();
    return await loader.loadAsync(texture);
  }

  _createBufferGeometry() {
    return new THREE.SphereBufferGeometry(this.radius, this.width, this.height);
  }

  //Setters
  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setDepth(depth) {
    this.depth = depth;
  }

  //Getters
  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDepth() {
    return this.depth;
  }

  getBufferGeometry() {
    return this.bufferGeometry;
  }

  getMaterial() {
    this.material.wireframe = true;
    return this.material;
  }

  getMesh() {
    this.mesh.position.x = this.wordPosition.x;
    this.mesh.position.y = this.wordPosition.y;
    this.mesh.position.z = this.wordPosition.z;
    console.log(this.mesh);
    return this.mesh;
  }
}
