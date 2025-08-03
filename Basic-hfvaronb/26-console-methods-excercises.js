// 1. Crea un función que utilice error correctamente.

function isNumber(n) {
    if( typeof n != "number")
        console.error("Tipo incorrecto", new Error("No se ha ingresado un número"))
}

isNumber("S")


// 2. Crea una función que utilice warn correctamente.

function isLegalAge(age) {
    if (age < 18) {
        console.warn("Su edad es menor a 18")
    } else {
        console.warn("Es mayor de 18, puede seguir")
    }
}

isLegalAge(17)

// 3. Crea una función que utilice info correctamente.

console.info("Debe ingresar solo números")

// 4. Utiliza table.

let fruits = [
    ["Manzana", 7],
    ["Banano", 2],
    ["Pera", 4]
]

console.table(fruits)

fruits = [
    {Nombre: "Manzana", Cantidad: 7},
    {Nombre: "Banano", Cantidad: 2},
    {Nombre: "Pera", Cantidad: 4}
]

console.table(fruits)

// 5. Utiliza group.


console.group("Animals")
console.log("Gato")
console.log("Perro")
console.log("Canario")
console.groupEnd("Animals")

// 6. Utiliza time.

console.time("Ciclo dias del año")

let yearDay = 0
while (yearDay < 365) {
    yearDay++
    console.log(yearDay)
}

console.timeEnd("Ciclo dias del año")

// 7. Valida con assert si un número es positivo.

let numberDay = -1
console.assert(numberDay > 0, "El número es menor a cero")

// 8. Utiliza count.

console.count("weekDay")
console.count("weekDay")
console.count("weekDay")
console.count("weekDay")
console.count("weekDay")

// 9. Utiliza trace.

function fullName() {
    lastName()
}

function lastName() {
    console.trace("Seguimiento")
    return "Varon"
}

fullName("Hector")

// 10. Utiliza clear.
console.log("Texto a limpiar")
console.clear()