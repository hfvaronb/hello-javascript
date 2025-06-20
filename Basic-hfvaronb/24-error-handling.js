// Excepción

// Produce una excepción
let myObject
// console.log(myObject.email)

// Capturar de errores

// Try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch (error){
    // Bloque de error
    console.log("Se ha producido un error: ", error.message)
}

// Finally

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

// Lanzamiento de errores

// Throw

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación solo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma numeros enteros")
    }

    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b)
    }

    return a + b
}
try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers("5", 10))
    console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores

try {
    console.log(sumIntegers(5.5, 10))
    // console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a  = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}