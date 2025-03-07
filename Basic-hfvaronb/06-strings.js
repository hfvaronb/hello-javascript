// Strings

// Concatenación

let myName = "Hector"
let gretting = "Hola, " + myName + "!"
console.log(gretting)
console.log(typeof gretting)

// Longitud
console.log(gretting.length)

// Acceso a caracteres
console.log(gretting[0])
console.log(gretting[12])

// Métodos comumes
console.log(gretting.toUpperCase())
console.log(gretting.toLowerCase())
console.log(gretting.indexOf("Hola"))
console.log(gretting.indexOf("Hector"))
console.log(gretting.indexOf("DevPro"))
console.log(gretting.includes("Hola"))
console.log(gretting.includes("Hector"))
console.log(gretting.includes("DevPro"))
console.log(gretting.slice(0, 10))
console.log(gretting.replace("Hector", "DevPro"))

// Template literals (plantillas literales)

let message = `Hola, este
es mi 
curso de
JavaScript`

console.log(message)

let email = "hectorvaron@gmail.com"

console.log(`Hola, ${myName}! tu email es ${email}.`)