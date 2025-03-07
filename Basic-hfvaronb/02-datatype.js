//Tipos de datos

// String (Cadena de texto)
let myName = "Hector Varon"
let alias = 'Koala'
let email = `hectorvaron@gmail.com`

// Números (number)
let age = 41 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue )

// Se utiliza para variables declaradas pero no inicializadas

// Null la variable en su valor es nulo
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(9876567898765434554321234567898765432345678765432345678765432345)
let myBigInt2 = 9876567898765434554321234567898765432345678765432345678765432345n
 
// Mostramos los tipos de datos

console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)