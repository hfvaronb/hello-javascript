// 1. Crea un objeto con 3 propiedades.

let vehicle = {
    brand : "Mazda",
    model : "CX9",
    year : 2024
}

// 2. Accede y muestra su valor.

console.log(vehicle.brand)

// 3. Agrega una nueva propiedad.

vehicle.passenger = 5

// 4. Elimina una de las 3 primeras propiedades.

delete vehicle.model

// 5. Agrega una función e invócala.

let vehicle2 = {
    brand : "Kia",
    model : "Rio",
    year : 2006,
    
    start : function() {
        console.log("Star engine")
    }
}

console.log(vehicle2)
vehicle2.start()

// 6. Itera las propiedades del objeto.

for (let key in vehicle2) {
    console.log(key + ": " +[vehicle2[key]])
}
// 7. Crea un objeto anidado.

let vehicle3 = {
    brand : "Suzuki",
    year: 2024,

    typeVehicle: {
        tyres : 2,
        color : "red"
    }
}

let vehicle4 = {
    brand : "Suzuki",
    year: 2024,

    typeVehicle: {
        tyres : 2,
        color : "red"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(vehicle3.typeVehicle.color)
console.log(vehicle3.typeVehicle.tyres)

// 9. Comprueba si los dos objetos creados son iguales.

console.log(vehicle3 == vehicle4)
console.log(vehicle3 === vehicle4)

// 10. Comprueba si dos propiedades diferentes son iguales.

console.log(vehicle3.brand == vehicle4.brand)