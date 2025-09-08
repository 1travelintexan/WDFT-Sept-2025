// console.log("hello world");
// console.warn("this is a warning");
// console.error("error error.....");

// Classes
// class keyword and the the name of the class and should be capital
// the class defines the shape of all animals
class Animal {
  //this is a static property for all animals
  static numberOfAnimalsInKingdom = 0;
  //this is a private property that is only accessible from inside the class
  #owner;
  constructor(name, type, size, age = 0, owner) {
    //this 'binds' the values in the constructor to the new Animal
    this.name = name;
    this.type = type;
    this.size = size;
    this.age = age;
    this.toys = [];
    this.isNice = true;
    Animal.numberOfAnimalsInKingdom++;
    //this sets the owner property
    this.#owner = owner;
  }
  speak() {
    if (this.type === "Dog") {
      console.log(`Hi my name is ${this.name}, woof woof`);
    } else if (this.type === "Cat") {
      console.log(`Hi my name is ${this.name}, meow meow`);
    } else {
      console.log("blah blah");
    }
  }
  hasABirthday() {
    this.age += 1;
    console.log(`Happy Birthday ${this.name}, Your new age is... ${this.age}`);
  }
  receivesAToy(newToy) {
    this.toys.push(newToy);
    console.log(`here are the toys of ${this.name} now... ${this.toys}`);
  }
  howManyAnimals() {
    console.log(
      `There are ${Animal.numberOfAnimalsInKingdom} animals in the kingdom, total...`
    );
  }
  sayOwner() {
    console.log(`${this.#owner} is the owner of ${this.name}`);
  }
  logThis() {
    console.log(this);
  }
}
//the new keyword creates the actual animal
// const animal1 = new Animal("Ragnar", "Dog", 38);
// const animal2 = new Animal("Sam", "Cat", 6, 4);
// const animal3 = new Animal("Buddy", "Dog", 20, 12);
// console.log(animal1, animal2, animal3);
// animal1.speak();
// animal2.speak();
// animal3.speak();
// animal1.hasABirthday();
// animal2.hasABirthday();
// animal3.hasABirthday();
// animal1.receivesAToy("ball");
// animal2.receivesAToy("ball of yarn");
// console.log(animal1, animal2);

// **************Extending a class **************
class Dog extends Animal {
  constructor(dogName, type = "Dog", dogSize, dogAge, dogBreed, owner) {
    super(dogName, type, dogSize, dogAge, owner);
    this.breed = dogBreed;
  }
  //overwrite an existing method
  speak() {
    console.log("this is the new speak method");
  }
  goForAWalk() {
    console.log(`${this.name} is going for a long walk....`);
  }
}
class Cat extends Animal {
  constructor(name, type = "Cat", size, age, breed, indoor, owner) {
    super(name, type, size, age, owner);
    this.breed = breed;
    this.indoor = indoor;
  }
}
const Ragnar = new Dog("Ragnar", undefined, 38, 4, "Pitbull", "Joshua");
const Sam = new Cat("Sam", undefined, 6, 4, "Gray", false, "Claire");
const Norte = new Cat("Norte", undefined, 6, 4, "white", false, "Joshua");
// console.log(Ragnar);
// console.log(Sam);
// Ragnar.speak();
// Sam.speak();
// Ragnar.goForAWalk();

// Sam.goForAWalk();
// Ragnar.howManyAnimals();

// console.log(Ragnar.name, Ragnar.age, Ragnar.owner);
// Ragnar.sayOwner();
// Sam.sayOwner();

//*****************this *************/
Ragnar.logThis();
Sam.logThis();
// the global window object
// console.log("here in the code... ", this);

// function saythis() {
//   console.log("inside a function... ", this);
// }
// const num = 2;
// if (num === 2) {
//   console.log("inside the if statement", this);
// }
const obj = {
  objectName: "this is a boring object",
  //inside an object with an arrow function, it refers to the 'window'
  logThisWithArrow: () => {
    console.log("inside the arrow function... ", this);
  },
  //inside an object with an function keyword, it refers to the object it is in...
  logThisWithFunction: function () {
    console.log("inside the function keyword", this);
  },
};
obj.logThisWithArrow();
obj.logThisWithFunction();
// const arr = [1, 2, 3];
// arr.forEach(() => {
//   console.log(this);
// });
const sayThisArrow = () => {
  console.log(this);
};
function sayThisWithFunction() {
  console.log(this);
}

sayThisArrow();
sayThisWithFunction();
