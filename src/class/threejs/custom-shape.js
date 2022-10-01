import * as THREE from "three";
import { TwoDimensionVector } from "../types/two-dimension-vector";

export class CustomShape {
  /**
   * The constructor function takes a startPosition as an argument and sets it to the startPosition
   * property of the object. It also creates a new THREE.Shape object and sets it to the shape property
   * of the object. Finally, it calls the init function
   * @param [startPosition] - The starting position of the shape.
   */
  constructor(startPosition = new TwoDimensionVector(0, 0)) {
    this.startPosition = startPosition;
    this.shape = new THREE.Shape();
    this.init();
  }

  /**
   * "Move the shape to the starting position and set the current position to the starting position."
   *
   * The first line of the function is a call to the moveTo() function of the shape object. The
   * moveTo() function takes two arguments: the x and y coordinates of the position to move to. The x
   * coordinate is the first argument, and the y coordinate is the second argument
   */
  init() {
    this.shape.moveTo(this.startPosition.getX(), this.startPosition.getY());
    this.currentPosition = this.startPosition;
  }

  //more on https://threejs.org/docs/#api/en/geometries/ShapeGeometry
  /**
   * It takes two vectors as arguments, and draws a bezier curve between them
   * @param vectorStart - The starting point of the vector.
   * @param vectorEnd - The end point of the curve.
   * @returns The shape object.
   */
  move(vectorStart, vectorEnd) {
    this.shape.bezierCurveTo(
      vectorStart.x,
      vectorStart.y,
      vectorEnd.x,
      vectorEnd.y
    );

    return this;
  }

  /**
   * It takes a scene and a color, creates a shape geometry from the shape property, creates a mesh
   * material from the color, creates a mesh from the geometry and material, and adds the mesh to the
   * scene
   * @param scene - The scene to draw the shape in.
   * @param [color=0xffffff] - The color of the shape.
   */
  draw(scene, color = 0xffffff) {
    const geometry = new THREE.ShapeGeometry(this.shape);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }
}
