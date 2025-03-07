// 1. Escribe un comentario en una línea.

// Este es un comentario para el ejercicio número 1 de la sección de primeros pasos

// 2. Escribe un comentario en varias lí­neas.

/* Ahora escribimos
un mensaje y lo
comentamos en varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

// String
let brand = "Mazda"

// Number
let phoneNumber = 3214961278 // Entero
let temperature = 22.1 // Decimal

// Boolean

let turnOn = true

// Undefined
let autorization

// Null

let myStatus = null

// Symbol

let myCommute = Symbol("commute")

// BigInt

let myUuid = BigInt(123456789876543234567898765433789876543234567)

// 4. Imprime por consola el valor de todas las variables.

console.log(brand)
console.log(phoneNumber)
console.log(temperature)
console.log(turnOn)
console.log(autorization)
console.log(myStatus)
console.log(myCommute)
console.log(myUuid)

// 5. Imprime por consola el tipo de todas las variables.

console.log(typeof brand)
console.log(typeof phoneNumber)
console.log(typeof temperature)
console.log(typeof turnOn)
console.log(typeof autorization)
console.log(typeof myStatus)
console.log(typeof myCommute)
console.log(typeof myUuid)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.

brand = "Kia"
phoneNumber = 1234567890 // Entero
temperature = 1.0 // Decimal
turnOn = false
autorization = undefined
myStatus = null
myCommute = Symbol("otherCommute")
myUuid = BigInt(243423543453)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.

brand = 9999
phoneNumber = "productName" // Entero
temperature = "agile" // Decimal
turnOn = BigInt(765555)
autorization = null
myStatus = undefined
myCommute = "true"
myUuid =  Symbol("othersymbol")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

const factory = "Mazda"
const cardId = 8077828
const height = 2.13
const functionClose = true
const functionOpen = false
// const arrived
const delivered = null
const traffic = Symbol("traffic")
const userId = BigInt(7654567898765432123456789098765432134567856789876567890654356789458679034567123456789)

// 9. A continuación, modifica los valores de las constantes.

// factory = "Kia"
// cardId = 527767
// height = 8.1
// functionClose = false
// functionOpen = true
// const arrived
// delivered = "nulo"
// traffic = Symbol("free")
// userId = BigInt(7654567898765432123434343233434324343243645667356789458679034567123456789)

// 10. Comenta las lí­neas que produzcan algún tipo de error al ejecutarse.

// Lineas de código comentadas en el ejercicio 9