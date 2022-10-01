import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { SpaceObject } from "./space-object";

export class Planet extends SpaceObject {
  constructor(id, name, wordPosition, wordRotation, wordPath, webLinks) {
    super(id, name, wordPosition, wordRotation, wordPath, webLinks);
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
      this.scene.addObjToScene(obj);
    });
  }
}
