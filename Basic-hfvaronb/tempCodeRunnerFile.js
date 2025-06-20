function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación solo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma numeros enteros")
    }
    return a + b
}
try {
    console.log(sumIntegers(5, 10))
    console.log(sumIntegers("5", 10))
    console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}