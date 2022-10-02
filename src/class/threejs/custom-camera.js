import * as THREE from "three";

export class CustomCamera {
  /**
   * The constructor function is a function that is called when an object is created from a class and
   * it's used to set the values of the object's properties
   * @param [fov=75] - The field of view of the camera.
   * @param [aspect=0] - The aspect ratio of the camera. This is the ratio of the width of the camera
   * to its height.
   * @param [near=0.0001] - The near clipping plane. Anything before this plane will not be rendered.
   * @param [far=50000000] - The far plane of the camera.
   * @param [positionX=1] - The x position of the camera.
   * @param [positionY=1] - The Y position of the camera.
   * @param [positionZ=50] - The distance from the camera to the center of the scene.
   */
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
  /**
   * The init function creates a new camera object, sets the camera's position, and sets the camera's
   * field of view, aspect ratio, near and far clipping planes
   */
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

  /**
   * It sets the camera's position to the x, y, and z coordinates passed in as arguments
   * @param x - The x coordinate of the camera's position.
   * @param y - The y-coordinate of the camera.
   * @param z - The z-axis is the axis that points out of the screen.
   */
  setCameraLookAt(x, y, z) {
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
  }

  //Getters
  /**
   * This function returns the camera object
   * @returns The camera object.
   */
  getCamera() {
    return this.camera;
  }

  /**
   * This function returns the value of the fov property.
   * @returns The field of view.
   */
  getFov() {
    return this.fov;
  }

  /**
   * This function returns the aspect of the current object
   * @returns The aspect of the camera.
   */
  getAspect() {
    return this.aspect;
  }

  /**
   * This function returns the value of the near property.
   * @returns The near property of the object.
   */
  getNear() {
    return this.near;
  }

  /**
   * The function getFar() returns the value of the variable far
   * @returns The far value of the camera.
   */
  getFar() {
    return this.far;
  }

  /**
   * This function returns the value of the positionX property.
   * @returns The positionX property of the object.
   */
  getPositionX() {
    return this.positionX;
  }

  /**
   * This function returns the value of the positionY property.
   * @returns The positionY property of the object.
   */
  getPositionY() {
    return this.positionY;
  }

  getPositionZ() {
    return this.positionZ;
  }
}
