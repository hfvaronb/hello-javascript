// Console

// log

console.log("¡Hola, JavaScript!")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse.a la base de datos: ", new Error("Conexión fallida"))


// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Mariana", 1],
    ["Yuly", 43],
    ["Hector", 42]
]
console.table(data)

data = [
    { name: "Mariana", age: 1},
    { name: "Yuly", age: 43},
    { name: "Hector", age: 42}
]
console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

// time, medir el tiempo que tarda en ejecutar un código

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")
console.timeEnd("Tiempo de ejecución 2")

// assert Muestra error si lo que evalua es falso

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count sirve para contabilizar una ejecución

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

// trace seguimiento de la pila de ejecucón

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear limpia la salida

console.clear()