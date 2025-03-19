// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inicializacion
myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Hector", "varon", "hfvaronb", 41, true]
myArray2 = new Array("Hector", "varon", "hfvaronb", 41, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Hector"
// myArray2[1] = "Varon"
myArray2[2] = "hfvaronb"
myArray2[4] = "hfvaronb"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop
myArray.push("Hector")
myArray.push("Varon")
myArray.push(41)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Hector", "Bonilla") // Agrega uno o mas datos desde el principio del array
console.log(myArray)

// length
console.log(myArray.length)

// clear
myArray = []
myArray.length = 0 // No usar esta alternativa

// slice define el rango que quisiera extraer del arreglo, el segundo indice no lo tendria en cuenta
myArray = ["Hector", "varon", "hfvaronb", 41, true]

let myNewArray = myArray.slice(1, 3)
console.log(myArray)
console.log(myNewArray)

// splice elimina el elemento desde el indice cuantos elementos
myArray.splice(1, 3)
console.log(myArray)

myArray = ["Hector", "varon", "hfvaronb", 41, true]
myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)