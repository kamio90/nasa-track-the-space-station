import * as THREE from "three";
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
    material = null
  ) {
    super(id, name, wordPosition, wordRotation, wordPath, webLinks);
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.bufferGeometry = this._createBufferGeometry();
    this.material = this._createMaterial(material);
    this.mesh = this._createMesh();
  }

  //Handlers
  handleRotation() {
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.y += 0.01 * Math.sin(1);
    // mesh.rotation.z += 0.01 * Math.sin(1);
  }

  //Helpers
  _createMesh() {
    return new THREE.Mesh(this.bufferGeometry, this.material);
  }

  _createMaterial(material) {
    if (material == null) return new THREE.MeshNormalMaterial();
    return material;
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
    return this.mesh;
  }
}
