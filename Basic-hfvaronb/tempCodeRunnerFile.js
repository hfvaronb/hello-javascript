// Crea array
myFruits = ["Banano", "Manzana", "Pera", "Aguacate", "Naranja"]
console.log(myFruits)

// Array transformado en set
setFruits = new Set(myFruits)
console.log(setFruits)

// Set almacenado en MAP
mapFruits = new Map()
mapFruits.set("Fruits", setFruits)
console.log(mapFruits)
console.log(mapFruits.get("Fruits"))