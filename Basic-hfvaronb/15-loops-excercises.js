// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.

for (i = 1; i <= 20; i++) {
  console.log(i);
}

let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.

let addition = 0;
for (i = 1; i <= 100; i++) {
  addition = addition + i;
  console.log(`${i} ${addition}`);
}

let counter = 0;
let add = 0;

while (counter <= 100) {
  add = add + counter;
  console.log(`contador: ${counter} suma: ${add}`);
  counter += 1;
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.

counter = 1;
do {
  if (counter % 2 == 0) {
    console.log(`${counter} es par`);
  }

  counter += 1;
} while (counter <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let nombres;
nombres = ["paola", "andres", "alexandra", "yuly", "Mariana"];

for (i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

setVowels = new Set(["a", "e", "i", "o", "u"]);
let phrase = "a programar se aprende programando";
let vowelsCounter = 0;

for (let valor of phrase) {
  if (setVowels.has(valor)) {
    vowelsCounter += 1;
    console.log(`Vocal ${valor} encontrada`);
  }
  // console.log(valor)
}
console.log(vowelsCounter);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

arrayOfNumbers = [4, 2, 5, 7, 9, 12];
i = 0;
let product = 1;
while (i < arrayOfNumbers.length) {
  product = product * arrayOfNumbers[i];
  console.log(product);
  i++;
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

i = 1
do{
console.log(`5 x ${i} =`, 5*i)
i +=1
}
while(i <= 10)

// 8. Usa un bucle para invertir una cadena de texto.

original = "Te quiero tanto asi"
reversed = ""

for (let i = original.length - 1; i >= 0; i--){
  console.log(reversed += original[i])
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

let serie = [0, 1]
for (let i = 2; i <= 10; i++) {
  serie.push(serie[i - 1] + serie[i - 2])
}
console.log(serie)

let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)
 
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.

let numbers = [2, 5, 12, 9, 10, 14, 3, 18, 21, 100]
let greatherThan = []
counter = 0


console.log(numbers[0])
while(counter <= numbers.length) {
  if(numbers[counter] > 10)
  {
  greatherThan.push(numbers[counter])
  }
  counter +=1
}
console.log(greatherThan)