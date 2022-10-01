import * as THREE from 'three';
import { SpaceObject } from "./space-object";


export class Planet extends SpaceObject {
  constructor(id, name, wordPosition, wordRotation, wordPath, webLinks, width, height, radius) {
    super(id, name, wordPosition, wordRotation, wordPath,webLinks);
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.bufferGeometry = this.createBufferGeometry();
  }
  
  //Helpers
  createBufferGeometry(){
    return new THREE.SphereBufferGeometry(this.radius,this.width,this.height);
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
}