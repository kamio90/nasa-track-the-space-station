import * as THREE from "three";

export class CustomScene {
  constructor() {
    this.objects = [];
    this.scene = new THREE.Scene();
  }

  //Operations
  addObjToScene(obj, id, name) {
    const newObject = {
      id: id,
      name: name,
    };
    this.objects.push(newObject);
    this.scene.add(obj);
  }

  //Getters
  getScene() {
    return this.scene;
  }

  getAllObjects() {
    return this.objects;
  }

  getOneObjectByID(id) {
    return this.objects.filter((object) => object.id == id);
  }

  getOneObjectByName(name) {
    return this.objects.filter((object) => object.name == name);
  }
}
