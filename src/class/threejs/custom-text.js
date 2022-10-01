//import * as THREE from 'three'
export class CustomText {
  constructor(
    text = "Hello",
    size = 80,
    height = 5,
    curveSegments = 12,
    bevelEnabled = true,
    bevelThickness = 10,
    bevelSize = 8,
    bevelOffset = 0,
    bevelSegments = 5
  ) {
    this.text = text;
    this.size = size;
    this.height = height;
    this.curveSegments = curveSegments;
    this.bevelEnabled = bevelEnabled;
    this.bevelThickness = bevelThickness;
    this.bevelSize = bevelSize;
    this.bevelOffset = bevelOffset;
    this.bevelSegments = bevelSegments;
  }
}
