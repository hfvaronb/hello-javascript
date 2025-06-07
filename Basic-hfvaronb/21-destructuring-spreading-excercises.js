// 1. Usa desestructuración para extraer los dos primeros elementos de un array.

fruitsArray = ["Manzana", "Uva", "Pera", "Banano", "Piña"];
console.log(fruitsArray);

let [myFruit0, myFruit1] = fruitsArray;
console.log(myFruit0);
console.log(myFruit1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.

colorsArray = ["Amarillo", "Rojo", "Blanco"];
let [myColor0 = 0, myColor1 = 0, myColor2 = 0, myColor3 = "Verde"] =
  colorsArray;
console.log(myColor0);
console.log(myColor1);
console.log(myColor2);
console.log(myColor3);

// 3. Usa desestructuración para extraer dos propiedades de un objeto.

let student = {
  name: "Andres",
  age: 20,
  course: "Pregrado",
};

let { name, age, course } = student;
console.log(name);
console.log(age);
console.log(course);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y así­gnalas a nuevas variables con nombres diferentes.

let { name: name2, age: age2, course: course2 } = student;
console.log(name2);
console.log(age2);
console.log(course2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.

let vehicle = {
    type: "Automovil",
    wheels: 4,
    bodyWork: "Sedan",

  specs: {
    brand: "Kia",
    model: "Rio",
    year: 2006,
    speed: 120,

    startUp: function () {
        console.log("El vehiculo esta encendido y se desplaza a una velocidad de ${this.speed} km/h ")
    }
  }
};

let { type: tipo, specs: {brand: marca}} = vehicle

console.log(tipo)
console.log(marca)

// 6. Usa propagación para combinar dos arrays en uno nuevo.


newColorsArray = [...colorsArray, "Verde", "Fucsia"]
console.log(newColorsArray)

// 7. Usa propagación para crear una copia de un array.

let myColorCopy = [...newColorsArray]
console.log(myColorCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo.

let footballTeams = { a: "Colombia", b: "Brasil"}
let cupGroup = { c: 1, d: 2}
let footballCup = {...footballTeams, ...cupGroup}
console.log(footballCup)

let myUltimateArray = [...colorsArray, ...newColorsArray]
console.log(myUltimateArray)

// 9. Usa propagación para crear una copia de un objeto.

let vehicle2 = {...vehicle}
console.log(vehicle2)

// 10. Combina desestructuración y propagación.

let pet = ["Conejo", "Perro", "Gato", "Hamster"]
let [pet1, pet2, ...adic] = pet
console.log(pet1)
console.log(pet2)
console.log(adic)

