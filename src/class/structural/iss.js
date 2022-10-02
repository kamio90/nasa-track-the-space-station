import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { ThirdDimensionVector } from "../types/third-dimension-vector";

export class ISS {
  constructor(
    id = 1,
    name = "ISS",
    position = new ThirdDimensionVector(0, 0, 0)
  ) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.partsOfModel = [];
  }

  async loadPartOfModel(scene, url, scale, positionVector, nameOfPartModel) {
    const fbxLoader = new FBXLoader();
    const obj = await fbxLoader.loadAsync(url).then(obj => {
      obj.scale.multiplyScalar(scale);
      obj.position.x = positionVector.getX();
      obj.position.y = positionVector.getY();
      obj.position.z = positionVector.getZ();
      obj.updateMatrix();
      this._createPartOfModelObject(
            this.partsOfModel.length + 1,
            nameOfPartModel,
            positionVector,
            obj,
          );
      scene.addObjToScene(obj);
    });
       
      
    //  fbxLoader.load(url, (obj) => {
    //   await obj.scale.multiplyScalar(scale);
    //   obj.position.x = positionVector.getX();
    //   obj.position.y = positionVector.getY();
    //   obj.position.z = positionVector.getZ();
    //   obj.updateMatrix();
    //   // this._createPartOfModelObject(
    //   //   this.partOfModel.length + 1,
    //   //   nameOfPartModel,
    //   //   positionVector,
    //   //   obj,
    //   //   obj.mesh.color
    //   // );
    //   console.log(nameOfPartModel);
    //   scene.addObjToScene(obj);
    // });
  }

  _createPartOfModelObject(id, name, position, mesh) {
    const object = {
      id: id,
      name: name,
      position: position,
      mesh: mesh,
    };

    this.partsOfModel.push(object);
  }

  move(vector3){
    this.partsOfModel.map(part => part.mesh.position += vector3);
  }

  _setColorOnPartOfModelByID(id, color) {
    this.partsOfModel.forEach((part) => {
      if (part.id == id) {
        part.mesh.color = color;
      }
    });
  }

  _setBaseColorOnPartOfModelByID(id) {
    this.partsOfModel.forEach((part) => {
      if (part.id == id) {
        part.mesh.color = part.baseColor;
      }
    });
  }

  _hidePartOfModelByID(id) {
    this.partsOfModel.forEach((part) => {
      if (part.id == id) {
        part.mesh.visible = hidden;
      }
    });
  }

  _hidePartOfModelByName(name) {
    this.partsOfModel.forEach((part) => {
      if (part.name == name) {
        part.mesh.visible = hidden;
      }
    });
  }

  _showHiddenPartOfModelByID(id) {
    this.partsOfModel.forEach((part) => {
      if (part.id == id) {
        part.mesh.visible = visible;
      }
    });
  }

  _showHiddenPartOfModelByName(name) {
    this.partsOfModel.forEach((part) => {
      if (part.name == name) {
        part.mesh.visible = visible;
      }
    });
  }
}
