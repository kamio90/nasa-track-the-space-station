import * as THREE from "three";

export class CustomScene {
  /**
   * The constructor function is called when a new instance of the class is created
   */
  constructor() {
    this.objects = [];
    this.scene = new THREE.Scene();
  }

  //Operations
  /**
   * It adds an object to the scene
   * @param obj - The object to add to the scene.
   * @param id - The id of the object.
   * @param name - The name of the object.
   */
  addObjToScene(obj, id, name) {
    const newObject = {
      id: id,
      name: name,
    };
    this.objects.push(newObject);
    this.scene.add(obj);
  }

  //Getters
  /**
   * It returns the scene
   * @returns The scene.
   */
  getScene() {
    return this.scene;
  }

  /* It returns all the objects in the scene. */
  getAllObjects() {
    return this.objects;
  }

  /**
   * It returns an array of objects that have the same id as the id passed in as an argument
   * @param id - The id of the object you want to get.
   * @returns An array of objects that have the same id as the id passed in.
   */
  getOneObjectByID(id) {
    return this.objects.filter((object) => object.id == id);
  }

  /**
   * It returns an array of objects that have a name property that matches the name parameter
   * @param name - The name of the object you want to get.
   * @returns An array of objects that have the same name as the name passed in.
   */
  getOneObjectByName(name) {
    return this.objects.filter((object) => object.name == name);
  }
}
