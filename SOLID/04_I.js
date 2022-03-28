/** Interface segregation principal - интерфейс разденления
 те классы которые наследуются от базового класса, если они не используют методы базового класса то не должны от них зависить*/

// example 1
/*
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} умеет гулять`);
  }

  swim() {
    console.log(`${this.name} умеет плавать`);
  }

  fly() {
    console.log(`${this.name} умеет летать`);
  }

}

class Dog extends Animal {
  fly() {
    return null;
  }
}

class Eagle extends Animal {
  swim() {
    return null;
  }
}

class Whale extends Animal {
  walk() {
    return null;
  }

  fly() {
    return null;
  }
}

const dog = new Dog('rex');
console.log(dog.walk());
console.log(dog.fly());
console.log(dog.swim());

*/

// класс Animal сильно обобщен и приходиться отменять свойста класса у дочерних классов
// как раз благодаря этому принципу мы можем сделать функционал более разделенным - убрать не нужное поведение элементов

class Animal {
  constructor (name) {
    this.name = name
  }
}

//реализовали объекты объяснеющие определенное поведение
const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`);
  }
}
const walker = {
  walk() {
    console.log(`${this.name} умеет гулять`);
  }
}
const flier = {
  fly() {
    console.log(`${this.name} умеет летать`);
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('rex');
dog.swim()
dog.walk()
