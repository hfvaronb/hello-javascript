// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Hector"],
    ["email", "hectorvaron@mail.com"],
    ["age", 42]
])

console.log(myMap)

// Métodos y propieades

// Set Actualiza o agrega un elemento

myMap.set("alias", "hfvaronb")
myMap.set("name", "Hector Varon")
console.log(myMap)

// get recupera el valor

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has contiene

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values, entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size tamaño del mapa

console.log(myMap.size)

// clear borra el contenido del mapa

myMap.clear()

console.log(myMap)



//