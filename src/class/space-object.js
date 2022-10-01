export class SpaceObject {
  constructor(id, name, model, wordPosition, wordRotation, wordPath,webLinks) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.wordPosition = wordPosition;
    this.wordRotation = wordRotation;
    this.wordPath = wordPath;
    this.webLinks = webLinks;
  }

  //Getters
  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getModel() {
    return this.model;
  }

  getWordPosition() {
    return this.wordPosition;
  }

  getWordRotation() {
    return this.wordRotation;
  }

  getWordPath() {
    return this.wordPath;
  }

  getWebLinks() {
    return this.webLinks;
  }
}