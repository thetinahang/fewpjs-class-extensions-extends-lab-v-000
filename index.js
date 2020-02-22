// Your code here
class Polygon {
  constructor(sidesArray) {
    this.sides = sidesArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => side + total, 0);
  }
}
