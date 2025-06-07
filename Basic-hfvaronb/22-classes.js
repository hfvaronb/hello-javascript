class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis

let person = new Person("Hector", 42, "hvaron83");
let person2 = new Person("Alexandra", 44, "Marvin");

console.log(person);
console.log(person2);

console.log(typeof person);

// Valores por defecto

class DefaultPerson {
  constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("Chalie", 40);

console.log(person3);

// Acceso a las propiedades

console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = Snoopy;

// Funciones en clases

class PersonWhitMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  walk() {
    console.log("La persona camina.");
  }
}

let person4 = new PersonWhitMethod("Brais", 37, "MoureDev");
person4.walk();

// Propiedades privadas

class PrivatePerson {
  #bank;

  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  pay() {
    this.#bank;
  }
}

let person5 = new PrivatePerson("Fabio", 40, "Negro", "BCSC79797975654");

// No podemos acceder
// console.log(person5.bank)
// person5.bank = "fdsfdsffsdf9893" // bank es difernte de #bank

console.log(person5);

// Getters y Setters

class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }

  get name() {
    return this.#name;
  }

  get bank() {
    return this.#bank;
  }

  set bank(bank) {
    this.#bank = bank;
  }
}

person6 = new GetSetPerson("Hector", 42, "hfvaron", "ABC12345");

console.log(person6);
console.log(person6.name);
person6.bank = "QWERTY987654";
console.log(person6.bank);

// Herencia

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("El animal emite un sonido génerico");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Guau!");
  }

  run() {
    console.log("El perro corre");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  swim() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("MoureDog");
myDog.run();
myDog.sound();

let myFish = new Fish("MoureFish", 10);
myFish.swim();
myFish.sound();

// Métodos estáticos

class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(5, 8));
