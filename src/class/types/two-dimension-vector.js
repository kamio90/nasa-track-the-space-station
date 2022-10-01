export class TwoDimensionVector {
  /**
   * The constructor function creates a new object with the properties x and y.
   * @param x - The x coordinate of the point.
   * @param y - The y coordinate of the point.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //Getters
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
   * It returns an object with two properties, x and y, whose values are the values of the x and y
   * properties of the object on which the function is called
   * @returns An object with two properties, x and y, which are the values of the x and y properties of
   * the object that the method is being called on.
   */
  get() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  //Setters
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
   * Set the x and y values of this vector to the x and y values of the vector passed in.
   * @param vector - The vector to copy.
   */
  set(vector) {
    this.x = vector.x;
    this.y = vector.y;
  }

  //Math
  /**
   * Add the x and y values of the vector passed in to the x and y values of this vector.
   * @param vector - The vector to add to this vector.
   * @returns The vector object.
   */
  add(vector) {
    this.x += this.toNumber(vector.x);
    this.y += this.toNumber(vector.y);

    return this.get();
  }

  /**
   * "Subtracts the x and y values of the given vector from the x and y values of this vector."
   *
   * The first line of the function is a comment. Comments are ignored by the JavaScript interpreter.
   * They are used to explain what the code is doing
   * @param vector - The vector to subtract from this vector.
   * @returns The vector object.
   */
  subtract(vector) {
    this.x -= this.toNumber(vector.x);
    this.y -= this.toNumber(vector.y);

    return this.get();
  }

  /**
   * It converts a any type to a number
   * @param input - The input to be converted to a number.
   * @returns the input as a number.
   */
  toNumber(input) {
    if (typeof input === "number") {
      return input;
    }

    return Number(input);
  }
}
