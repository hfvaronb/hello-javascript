
// 1. Concatena dos cadenas de texto.

let saludo = "Hola "
let nombre = "Hector Bonilla"
console.log(saludo + nombre)

// 2. Muestra la longitud de una cadena de texto.
console.log(saludo.length)

// 3. Muestra el primer y Último carácter de un string.
console.log(nombre[0])
console.log(nombre[13])

// 4. Convierte a mayúsculas y minúsculas un string.
console.log(nombre.toUpperCase())
console.log(saludo.toLowerCase())
// 5. Crea una cadena de texto en varias lí­neas.
let mensaje = ` La instalación
de los componentes ha
sido exitosa !
`
console.log(mensaje)

// 6. Interpola el valor de una variable en un string.
let profesion = "Ingeniero de software"
console.log(`${profesion}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let consigna = "¡A programar se aprende programando!"
console.log(consigna.replace("r", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta.
let frase = "Esta el dia soleado"
console.log(frase.includes("da"))
// 9. Comprueba si dos strings son iguales.
let fruta = "uva"
let extremidad = "brazo"
console.log(fruta.localeCompare(extremidad))

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(fruta,fruta.length, extremidad, extremidad.length)