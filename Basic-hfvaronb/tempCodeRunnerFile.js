const pair = (number) => {
  for (let i = 0; i < number.length; i++) {
    // return number.length;
    suma = 0
    if (number % 2 == 0) {
      suma = suma + number
      console.log(suma)
    }
  }     
};
let number = [2, 4, 3, 7, 8];
(pair(number));