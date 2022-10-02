import * as THREE from "three";

export class CustomCamera {
  constructor(
    fov = 75,
    aspect = 0,
    near = 0.0001,
    far = 50000000,
    positionX = 1,
    positionY = 1,
    positionZ = 50
  ) {
    this.fov = fov;
    this.aspect = window.innerWidth / window.innerHeight;
    this.near = near;
    this.far = far;
    this.positionX = positionX;
    this.positionY = positionY;
    this.positionZ = positionZ;
    this.init();
  }

  //init
  init() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.camera.position.x = this.positionX;
    this.camera.position.y = this.positionY;
    this.camera.position.z = this.positionZ;
  }

  setCameraLookAt(x, y, z) {
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
  }

  //Getters
  getCamera() {
    return this.camera;
  }

  getFov() {
    return this.fov;
  }

  getAspect() {
    return this.aspect;
  }

  getNear() {
    return this.near;
  }

  getFar() {
    return this.far;
  }

  getPositionX() {
    return this.positionX;
  }

  getPositionY() {
    return this.positionY;
  }

  getPositionZ() {
    return this.positionZ;
  }
}