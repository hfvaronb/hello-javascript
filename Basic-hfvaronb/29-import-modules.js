// Importación de módulos

import MyClass, { add, Circle, name, PI } from "./28-export-modules.js"
import defaultImport from "./28-export-modules.js"

// Funciones

console.log(add(5,10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(30)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(4, 8))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { myImport } from "./directory/file.js"
