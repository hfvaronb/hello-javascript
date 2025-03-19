// if, else if, else

// if (si)

let age = 18;

if (age == 37) {
  console.log("La edad es 37");
}

// else  (si no)

if (age == 37) {
  console.log("La edad es 37");
} else if (age < 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es 37 ni es menor de edad");
}

// operador ternario

const message =
  age == 37 ? "La edad es 37 - ternario" : "Ternario La edad no es 37";
console.log(message);

// switch - Esta estructura de control sirve para evaluar mutiples condiciones vs una variable

// Dependiendo de un número iniciando de 0 hasta 6, retorne el nombre del día

let dayNumber = 7;
let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
  case 5:
    dayName = "Sabado";
  case 6:
    dayName = "Domingo";
  default:
    dayName = "¡Número de dia incorrecto!";
}
console.log(dayName);
