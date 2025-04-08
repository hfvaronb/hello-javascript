// Loops o bucles

// for 

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento ${numbers[i]}`)
}

// while Se evalua antes de cada iteración

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true) {

// }

// do while, minimo una vez evalua la condición

i = 0
do {
    console.log(`Hola ${i}`)
    i ++
}while (i < 5)


// for off recorre algo que sea iterable, estructura de datos

myString = "¡Hola JavaScript!"

myArray = [1, 2, 3, 4]

mySet = new Set(["Hector", "Varon", 42, true, "hectorvaron@gmail.com"])

myMap = new Map([
    ["name", "Hector"],
    ["email", "hectorvaron@mail.com"],
    ["age", 42]
])

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas

// Break y continue

for (let i = 0; i < 5; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`Hola ${i}`)
}