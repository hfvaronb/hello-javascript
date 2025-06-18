// 1. Crea una clase que reciba dos propiedades.

class Vehicle {
  constructor(brand, line) {
    this.brand = brand;
    this.line = line;
  }

  // 2. Añade un método a la clase que utilice las propiedades.
  accelerate() {
    console.log(`Soy un ${sedan.brand} ${sedan.line} y estoy acelerando`);
  }

  // 4. Añade un método estático a la primera clase.

  static onStart() {
    console.log("Revisión de vehicuo completado");
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función.

let sedan = new Vehicle("Kia", "Rio EX");
console.log(sedan.brand);
console.log(sedan.line);
sedan.accelerate();

// 5. Haz uso del método estático.

Vehicle.onStart();

// 6. Crea una clase que haga uso de herencia.

class Bus extends Vehicle {
  constructor(brand, line, ability) {
    super(brand, line);
    this.ability = ability;
  }
}

let superBus = new Bus("Chevy", "LV500", 60);

console.log(superBus.brand);
console.log(superBus.line);
console.log(superBus.ability);

// 7. Crea una clase que haga uso de getters y setters.
// 8. Modifica la clase con getters y setters para que use propiedades privadas.

class Properaty {
  #tipo;
  #area;
  #price;
  constructor(tipo, area, price) {
    this.#tipo = tipo;
    this.#area = area;
    this.#price = price;
  }

  get tipo() {
    return this.#tipo;
  }

  get area() {
    return this.#area;
  }

  get price() {
    return this.#price;
  }

  set tipo(tipo) {
    this.#tipo = tipo;
  }

  set area(area) {
    this.#area = area;
  }

  set price(price) {
    this.#price = price;
  }
}

// 9. Utiliza los get y set y muestra sus valores.

house = new Properaty("Finca", "3000 mts", 400000);
console.log(house.tipo);
console.log(house.area);
console.log(house.price);
house.area = "4 hectareas";
console.log(house.area);

// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.

class AllBoard {
    constructor(type) {
        this.type = type
    }

    way() {
        console.log("Via de transito")
    }

}

class Land extends AllBoard {

    way() {
        console.log("Transita por tierra")
    }
}

class Air extends AllBoard {

    way() {
        console.log("Transita por el aire")
    }
}

let myTrain = new Land("Bus")
myTrain.way()

let myPlane = new Air("Avión")
myPlane.way()