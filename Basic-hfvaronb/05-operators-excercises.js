// 1. Crea una variable para cada operación aritmética.
let n1 = 8
let n2 = 5

let sumaVar = (n1 + n2)
console.log(sumaVar)

let restaVar = (n1 - n2)
console.log(restaVar)

let multiplicacionVar = (n1 * n2)
console.log(multiplicacionVar)

let divisionVar = (n1 / n2)
console.log(divisionVar)

let moduloVar = (n1 % n2)
console.log(moduloVar)

let exponenteVar = (n1 ** n2)
console.log(exponenteVar)

n1++
let incrementoVar = n1
console.log(incrementoVar)
n2--
let decrementoVar = (n2)
console.log(decrementoVar)


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.

let asignaSuma = sumaVar
asignaSuma += 2
console.log(asignaSuma)

let asignaResta = restaVar
asignaResta -= 2
console.log(asignaResta)

let asignaMultiplicacion = multiplicacionVar
asignaMultiplicacion *= 2
console.log(asignaMultiplicacion)

let asignaDivision = divisionVar
asignaDivision /= 2
console.log(asignaDivision)

let asignaModulo = moduloVar
asignaModulo %= 2
console.log(asignaModulo)

let asignaExponente = exponenteVar
asignaExponente **= 2
console.log(asignaExponente)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

console.log(n1 > 1)
console.log(n2 < n1)
console.log(n1 >= 4)
console.log(n2 <= 8)
console.log(n1 != 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

let x = 34
let y = "34"

console.log( x === y)
console.log( x < y)
console.log( x > y)
console.log( x != y)
console.log( y > x)

// 5. Utiliza el operador lógico and.

console.log(n1 > 5 && n2 < 6)


// 6. Utiliza el operador lógico or.

console.log(n2 > 1 || n1 < 10)

// 7. Combina ambos operadores lógicos.

console.log(n1 < 7 && n2 <= 5 || n2 > n1)

// 8. Añade alguna negación.

console.log(!(n1 > n2))

// 9. Utiliza el operador ternario.

let encendido = false
console.log(encendido ? "Esta encendido el carro" : "Esta apagado el carro")

// 10. Combina operadores aritmÃ©ticos, de comparÃ¡ción y lógicas.

let edad = 18
let calificacion = 80
let experiencia = 2
experiencia += 2
console.log(experiencia)

console.log(calificacion >= 80 && edad <= 18 || experiencia >= 3 && calificacion < 70)