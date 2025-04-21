// Funciones

// simple

function myFunc() {
    console.log("¡Hola, función!")
}

for(let i = 0; i < 5; i++){
    myFunc()
}


// Con parametros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}
myFuncWithParams("Hector")
myFuncWithParams("Flavio")

// Funciones anónimas, se deben asignar a una variable o a una constante

const myFunc2 = function (name) {
    console.log(`¡Hola ${name}!`)
}

myFunc2("Hector Fabio")

// Arrow functions - Forma simplificada para declarar una función, al igual que las funciones anonimas se debe asignar a una variable o una constante 

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

// Otra forma mas simple

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Yuly Alexandra")
myFunc4("Marianita")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()


function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

// Valores por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 15)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error; fuera del scope o rango

// Funciones de orden superior: funciones que reciben otras funciones como argumento

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

myArray = [1, 2, 3 ,4]

mySet = new Set(["Hector", "Varon", 42, true, "hectorvaron@gmail.com"])

myMap = new Map([
    ["name", "Hector"],
    ["email", "hectorvaron@mail.com"],
    ["age", 42]
])

myArray.forEach(function (value) {
    console.log(value)
});

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))