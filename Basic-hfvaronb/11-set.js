// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Hector", "Varon", 42, true, "hectorvaron@gmail.com"])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://hvaron.dev")
console.log(mySet)

mySet.delete("hectorvaron@gmail.com") // Como no elmina por indice, elimina por el nombre de elemento
console.log(mySet)


// Has
console.log(mySet.has("Varon"))
console.log(mySet.has("hectorvaron@gmail.com"))

// Size

console.log(mySet.size)

// Convertir un set a un array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("hectorvaron@gmail.com")
mySet.add("hectorvaron@gmail.com")
mySet.add("hectorvaron@gmail.com")
mySet.add("hectorvaron@gmail.com")
console.log(mySet)