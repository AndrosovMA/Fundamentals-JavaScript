/**Open close principle
 *
 * код проектируется таким образом, что если добавляется что то новое,
 * то старый код не меняется
 * */

class Shape {
  constructor() {
  }

  //если не реализовать в дочерних классах метод area будет падать ошибка
  area() {
    throw new Error('Area method should be implement');
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return (this.radius ** 2) * Math.PI;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((accum, shape) => {
      accum += shape.area();
      return accum;
    }, 0);
  }
}

const areaSquare = new AreaCalculator(
    [
      new Square(10),
      new Circle(10),
    ],
);
console.log(areaSquare.sum());