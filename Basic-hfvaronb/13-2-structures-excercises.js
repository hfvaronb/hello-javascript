// 1. Crea un array que almacene cinco animales.

myAnimals = ["Perro", "Gato", "Vaca", "Caballo","Cerdo"]
console.log(myAnimals)

// 2. Añaade dos más. Uno al principio y otro al final.
myAnimals.unshift("Abeja")
myAnimals.push("Barranquero")
console.log(myAnimals)

// 3. Elimina el que se encuentra en tercera posición.

myAnimals.splice(2,2)
console.log(myAnimals)
// 4. Crea un set que almacene cinco libros.

myBooks = new Set(["la bruja", "cien años de soledad", "perdido en el amazonas", "orgullo y prejuicio", "crimen y castigo"])
console.log(myBooks)
// 5. Añade dos más. Uno de ellos repetido.

myBooks.add("La bruja")
console.log(myBooks)

// 6. Elimina uno concreto a tu elección.
myBooks.delete("cien años de soledad")
console.log(myBooks)
// 7. Crea un mapa que asocie el número del mes a su nombre.

let monthMap = new Map()
monthMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(monthMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

console.log(monthMap.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
monthMap.set("summer", ["June", "July", "August"])
console.log(monthMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

myColors = ["White", "Black", "Orange", "Yellow"]
console.log(myColors)

// array transformado en Set
colorsSet = new Set(myColors)
console.log(colorsSet)

colorsMap = new Map
colorsMap.set("colors", colorsSet)
console.log(colorsMap)
console.log(colorsMap.get("colors"))
