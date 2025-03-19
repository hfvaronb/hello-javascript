// 1. Crea un array que almacene cinco animales.

let animals = ["Perro", "Gato", "Jirafa", "León", "Ballena"];
console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final.

animals.unshift("Abeja");
console.log(animals);
animals.push("Canguro");
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición.
animals.splice(2, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros.

let setBooks = new Set([
  "La maria",
  "Cien años de soledad",
  "La vorágine",
  "Perdidos en el amazonas",
  "El coronel no tiene quien le escriba",
]);
console.log(setBooks);

// 5. Añade dos más. Uno de ellos repetido.

setBooks.add("La bruja", "La maria");
console.log(setBooks);

// 6. Elimina uno concreto a tu elección.

setBooks.delete("La vorágine");
console.log(setBooks);

// 7. Crea un mapa que asocie el número del mes a su nombre.

let myMonth = new Map();
myMonth = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
console.log("Existe el mes número 5:",  myMonth.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

myMonth.set("verano", ["junio", "julio", "agosto"])
console.log(myMonth)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

// Crea array
myFruits = ["Banano", "Manzana", "Pera", "Aguacate", "Naranja"]
console.log(myFruits)

// Array transformado en set
setFruits = new Set(myFruits)
console.log(setFruits)

// Set almacenado en MAP
mapFruits = new Map()
mapFruits.set("fruits", setFruits)
console.log(mapFruits)
console.log(mapFruits.get("fruits"))
