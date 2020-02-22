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

class Triangle extends Polygon {
  get isValid() {
    check1 = this.sides[0] + this.sides[1] > this.sides[2];
    check2 = this.sides[1] + this.sides[2] > this.sides[0];
    check3 = this.sides[2] + this.sides[0] > this.sides[1];

    return check1 && check2 && check3;
  }
}

class Square extends Polygon {

}
