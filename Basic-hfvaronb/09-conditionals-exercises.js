// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let myName = "ector";
if (myName == "Hector") {
  console.log("La variable tiene como valor mi nombre:", myName);
} else {
  console.log("La varible no tiene el valor de mi nombre");
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let userName = "hvarn";
let userPassword = "A1B2C3";

if (userName === "hvaron" && userPassword === "A1B2C3") {
  console.log("Usuario contraseña coinciden");
} else {
  console.log("El usuario y/o contraseña no coinciden");
}

// tenia el operador igual, se ajusta a identico === para comparar los valores

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let number = -1;

if (number > 0) {
  console.log(number, "es un número positivo");
} else if (number < 0) {
  console.log(number, "es un número negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

let age = 16;
let missingAge;
let plural;

if (age >= 18) {
  console.log("¡Es mayor de edad y puede votar!");
} else {
  missingAge = 18 - age;
  plural = missingAge > 1 ? "años!" : "año";

  console.log(
    "¡Es menor de edad, no puede votar, le faltan",
    missingAge,
    plural
  );
}

// Corrección
if (age >= 18) {
  console.log("Puede votar.");
} else {
  console.log(`No puede votar, tiene que esperar ${18 - age}`, plural);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

let lifeCicle =
  age >= 18
    ? "Su edad lo clasifica como adulto"
    : "Su edad lo clasifica como menor";
console.log(lifeCicle);
// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".

let month = "abril";
if (
  month == "diciembre" ||
  month == "enero" ||
  month == "febrero" ||
  month == "marzo"
) {
  console.log("Nos encontramos en la estación de invierno");
} else if (month == "abril" || month == "mayo" || month == "junio") {
  console.log("Nos encontramos en la estación de primavera");
} else if (month == "julio" || month == "agosto" || month == "septiembre") {
  console.log("Nos encontramos en la estación de verano");
} else if (month == "octubre" || month == "noviembre") {
  console.log("Nos encontramos en la estación de otoño");
}
// Corrección
// mayor o igual que 3 y menor o igual que 5 primavera
// mayor o igual que 6 y menor o igual que 8 verano
// mayor o igual que 9 y menor o igual que 11 otoño

let mont = 4;
if (mont >= 3 && mont <= 5) {
  console.log("Primavera");
} else if (mont >= 6 && mont <= 8) {
  console.log("Verano");
} else if (mont >= 9 && mont <= 11) {
  console.log("Otoño");
} else {
  console.log("Invierno");
}
// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

if (
  month == "enero" ||
  month == "marzo" ||
  month == "mayo" ||
  month == "julio" ||
  month == "agosto" ||
  month == "octubre" ||
  month == "diciembre"
) {
  console.log("El mes", month, "tiene 31 días");
} else if (
  month == "abril" ||
  month == "junio" ||
  month == "septiembre" ||
  month == "noviembre"
) {
  console.log("El mes", month, "tiene 30 días");
} else {
  console.log(
    "El mes febrero tiene 28 días en un año normal y 29 cuando el año es bisiesto"
  );
}

// Corrección

if (mont === 2) {
  console.log("28 o 29 días");
} else if ([4, 6, 9, 11].includes(mont)) {
  console.log("30 días");
} else {
  console.log("31 días");
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let languaje = "deutsch";
let greeting;

switch (languaje) {
  case "english":
    greeting = "¡Hello!";
    break;
  case "frances":
    greeting = "¡Bonjour!";
    break;
  case "deutsch":
    greeting = "¡Hallo!";
    break;
  default:
    greeting = "¡Hola!";
}

console.log(greeting);

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

let months = 13;
let season;

switch (months) {
  case 1:
    season = "Estación de invierno";
    break;
  case 2:
    season = "Estación de invierno";
    break;
  case 3:
    season = "Estación de invierno";
    break;
  case 4:
    season = "Estación de primavera";
    break;
  case 5:
    season = "Estación de primavera";
    break;
  case 6:
    season = "Estación de primavera";
    break;
  case 7:
    season = "Estación de verano";
    break;
  case 8:
    season = "Estación de verano";
    break;
  case 9:
    season = "Estación de verano";
    break;
  case 10:
    season = "Estación de verano otoño";
    break;
  case 11:
    season = "Estación de verano otoño";
    break;
  case 12:
    season = "Estación de invierno";
    break;
  default:
    season = "Nombre de mes incorrecto.";
}
console.log(season);

// Correcction

switch (months) {
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Invierno");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

let monthName = "septiembre";
let numberOfDays;

switch (monthName) {
  case "enero":
    numberOfDays = 31;
    break;
  case "febrero":
    numberOfDays = 28;
    break;
  case "marzo":
    numberOfDays = 31;
    break;
  case "abril":
    numberOfDays = 30;
    break;
  case "mayo":
    numberOfDays = 31;
    break;
  case "junio":
    numberOfDays = 30;
    break;
  case "julio":
    numberOfDays = 31;
    break;
  case "agosto":
    numberOfDays = 31;
    break;
  case "septiembre":
    numberOfDays = 30;
    break;
  case "octubre":
    numberOfDays = 31;
    break;
  case "noviembre":
    numberOfDays = 30;
    break;
  case "diciembre":
    numberOfDays = 31;
    break;
  default:
    numberOfDays = "Nombre de mes incorrecto";
}
console.log("El mes", monthName, "tiene", numberOfDays, "días");

// Corrección
switch (months) {
  case 2:
    console.log("28 o 29 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 días");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    break
  default:
    console.log("Mes incorrecto");
}
// Escriba un programa que sume un número decimal y un entero. En otra variable guardar el resultado
// y mostralo en pantalla con el texto: El resultado de la suma

integerNumber = 19;
floatNumber = 14.2;
suma = integerNumber + floatNumber;
console.log("El resultado de la suma es", suma);
