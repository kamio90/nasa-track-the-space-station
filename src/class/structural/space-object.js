export class SpaceObject {
  constructor(id, name, wordPosition, wordRotation, wordPath,webLinks) {
    this.id = id;
    this.name = name;
    this.wordPosition = wordPosition;
    this.wordRotation = wordRotation;
    this.wordPath = wordPath;
    this.webLinks = webLinks;
  }

  //Setters
  setID(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setWordPosition(wordPosition) {
    this.wordPosition = wordPosition;
  }

  setWordRotation(wordRotation) {
    this.wordRotation = wordRotation;
  }

  setWordPath(wordPath) {
    this.wordPath = wordPath;
  }

  setWebLinks(webLinks) {
    this.webLinks = webLinks;
  }

  //Getters
  getID() {
    return this.id;
  }

  getName() {
    return this.name;
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