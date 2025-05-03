// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function addition(n1 = 0, n2 = 0) {
  return n1 + n2;
}
result = addition(2, 5);
console.log(`El resultado de la suma es ${result}`);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

function mayor(numbers, higher) {
  for (i = 0; i <= numbers.length; i++) {
    if (higher < numbers[i]) {
      // console.log(`${higher} es menor que ${numbers[i]}`);
      higher = numbers[i];
    } else if (higher >= numbers[i]) {
      // console.log(`${higher} es mayor o igual que ${numbers[i]}`);
    } else {
      // console.log(`${higher} es el número mayor de todo el array`);
    }
  }
  return higher;
}
result = mayor([3, 8, 20, 14, 8, 16, 2], 0);
console.log(`El número mayor del arreglo es ${result}`);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

function vowelSearch(phrase) {
  vowels = new Set(["a", "e", "i", "o", "u"]);
  // phrase = "a programar se aprende programando";
  vowelsCounter = 0;
  for (valor of phrase) {
    if (vowels.has(valor)) {
      vowelsCounter += 1;
    }
  }
  return vowelsCounter;
}
let phrase = "a programar se aprende programando con Brais";
result = vowelSearch(phrase);
console.log(`La frase ${phrase} tiene ${result} vocales`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function upperString() {
  myArray = ["Hector", "varon", "hfvaronb"];
  upString = [];
  for (value of myArray) {
    upString.push(value.toUpperCase());
  }
  return upString;
}
console.log(upperString());

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function primeNumber(number) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`${i} no es primo`);
      return false;
    }
  }
  if (number === 1) {
    console.log("El 1 no es numero primo");
  } else {
    console.log(`${number} es primo`);
  }
}
primeNumber(2);
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

function equalFunction() {
  vowels = new Set(["a", "e", "i", "o", "u", "c", "d", "e", "f", "g"]);
  alphabet = new Set(["z", "y", "t", "n", "o", "p", "u", "r", "s", "t"]);
  equalArray = [];
  for (valor of alphabet) {
    if (vowels.has(valor)) {
      equalArray.push(valor);
    }
  }
  console.log(equalArray);
}

equalFunction();

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function additionPair(number) {
  add = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      add = add + number[i];
    }
  }
  return add;
}
console.log(additionPair([1, 7, 3, 4, 5, 6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

myNumbersArray = [2, 3];

myNumbersArray.forEach((element) => {
  newArray = [element] ** 2;
  console.log(newArray);
});

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function reverseText(text) {
  newString = "";

  for (let i = text.length - 1; i >= 0; i--) {
    newString += text[i];
    // console.log(newString)
  }
  return newString;
}
reverse = reverseText("hola")
console.log(reverse)
 

// 10. Crea una función que calcule el factorial de un número dado.

function factorial(number) {
  for (let i = number - 1; i >= 1; i--) {
    // console.log(i)
    number = number * i
  }
  return number
}
console.log(factorial(6))