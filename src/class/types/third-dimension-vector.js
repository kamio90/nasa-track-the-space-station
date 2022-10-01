export class ThirdDimensionVector  {
  /**
   * The constructor function is a special function that is called when a new object is created
   * @param x - The x coordinate of the vector.
   * @param y - The y coordinate of the vector.
   * @param z - The z coordinate of the vector.
   */
  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  //Helpers
  /**
   * It converts a any type to a number
   * @param input - The input to be converted to a number.
   * @returns the input as a number.
   */
  toNumber(input) {
    if(typeof input === 'number') {
      return input;
    }

    return Number(input);
  }

  //Math
  /**
   * It takes a third dimension vector as an argument, converts the x, y, and z values to numbers, adds
   * them to the x, y, and z values of the current third dimension vector, and returns the current
   * third dimension vector
   * @param thirdDimensionVector - The vector to add to this vector.
   * @returns The third dimension vector.
   */
  addThirdDimensionVector(thirdDimensionVector) {
    const inputX = this.toNumber(thirdDimensionVector.x);
    const inputY = this.toNumber(thirdDimensionVector.y);
    const inputZ = this.toNumber(thirdDimensionVector.z);

    this.x += inputX;
    this.y += inputY;
    this.z += inputZ;

    return this.getThirdDimensionVector();
  }

  /**
   * Subtracts the input third dimension vector from the current third dimension vector.
   * @param thirdDimensionVector - The vector to subtract from this vector.
   * @returns The third dimension vector.
   */
  subtractThirdDimensionVector(thirdDimensionVector) {
    const inputX = this.toNumber(thirdDimensionVector.x);
    const inputY = this.toNumber(thirdDimensionVector.y);
    const inputZ = this.toNumber(thirdDimensionVector.z);

    this.x -= inputX;
    this.y -= inputY;
    this.z -= inputZ;

    return this.getThirdDimensionVector();
  }

  //Setters
  /**
   * This function sets the x, y, and z values of the current vector to the x, y, and z values of the
   * vector passed in as an argument
   * @param thirdDimensionVector - The vector to set the current vector to.
   */
  setThirdDimensionVector(thirdDimensionVector) {
    this.x = thirdDimensionVector.x;
    this.y = thirdDimensionVector.y;
    this.z = thirdDimensionVector.z;
  }

  /**
   * This function sets the value of the x property of the object that called it.
   * @param x - The x coordinate of the point.
   */
  setX(x) {
    this.x = x;
  }

  /**
   * This function sets the y value of the object.
   * @param y - The y coordinate of the point.
   */
  setY(y) {
    this.y = y;
  }

  /**
   * This function sets the z value of the object.
   * @param z - The z-index of the layer.
   */
  setZ(z) {
    this.z = z;
  }

  //Getters
  /**
   * This function returns an object with the x, y, and z properties of the vector.
   * @returns An object with the x, y, and z properties.
   */
  getThirdDimensionVector() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    }
  }

  /**
   * GetX() returns the value of the x property of the object that called it.
   * @returns The value of the x property of the object.
   */
  getX() {
    return this.x;
  }

  /**
   * This function returns the value of the y property of the object that called it.
   * @returns The y value of the point.
   */
  getY() {
    return this.y;
  }

  /**
   * The function getZ() returns the value of the variable z
   * @returns The value of the z property.
   */
  getZ() {
    return this.z;
  }
}