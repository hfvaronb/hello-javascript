function factorial(number) {
  for (let i = number - 1; i >= 1; i--) {
    // console.log(i)
    number = number * i
  }
  return number
}
console.log(factorial(6))