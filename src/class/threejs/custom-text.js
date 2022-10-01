import { FontLoader, TextGeometry } from "three";

import * as THREE from "three";
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
    this.fontLoader = new FontLoader();

    this.init();
  }

  init() {
    this.loader = this.fontLoader.load(
      "fonts/helvetiker_regular.typeface.json",
      (font) => {
        this.geometry = new TextGeometry(this.text, {
          font: font,
          size: this.size,
          height: this.height,
          curveSegments: this.curveSegments,
          bevelEnabled: this.bevelEnabled,
          bevelThickness: this.bevelThickness,
          bevelSize: this.bevelSize,
          bevelOffset: this.bevelOffset,
          bevelSegments: this.bevelSegments,
        });
      }
    );
  }

  getText() {
    return new THREE.Mesh(this.geometry);
  }
}
