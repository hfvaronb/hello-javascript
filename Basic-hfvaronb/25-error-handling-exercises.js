// 1. Captura una excepción utilizando try-catch.
let person;

try {
  console.log(person.name);
  console.log("Ejecución sin errores");
} catch (error) {
  console.log("Se ha producido un error", error.message);
}
// 2. Captura una excepción utilizando try-catch y finally.

function access(status) {
  if (status == true) {
    console.log("Autorizado para ingresar");
  }
  return status;
}

try {
  access();
  console.log("Si hay estado");
} catch (error) {
  console.log("Error de acceso", error.message);
} finally {
  console.log("Finally reestablece el acceso");
}

// 3. Lanza una excepción genérica.
try {
  throw new Error("generico");
} catch (error) {
  console.log("Se ha presentado un error", error.message);
}

// 4. Crea una excepción personalizada.

class personalError extends Error {
  constructor(message) {
    super(message);
    this.denomination = "PersonalError";
  }
}

// 5. Lanza una excepción personalizada.
try {
  throw new personalError("Error personalizado");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// 6. Lanza varias excepciones según una lógica definida.

function cicleOfLife(age) {
  if (typeof age !== "number") {
    throw new TypeError("Este validador solo recibe numeros");
  }

  if (age < 18) {
    throw new Error("Es menor de edad, no puede votar");
  }

  if (age > 18 && age < 80) {
    console.log("Puede votar");
  }

  return age;
}
try {
  // console.log(cicleOfLife("q"));
  console.log(cicleOfLife(99));
} catch (error) {
  console.log(`${error.name}:`, `${error.message}`);
}

// 7. Captura varias excepciones en un mismo try-catch.

function product(a, b) {
  if (typeof a != "number" || typeof b !== "number") {
    throw new TypeError("Esta operación solo utiliza números");
  }

  if (a === 0 || b === 0) {
    throw new Error("No se puede multiplicar por cero");
  }

  return a * b;
}

try {
  // console.log(product(2, "3"));
  console.log(product(2, 0));
} catch (error) {
  // console.log(`${error.name}:`, `${error.message}`);
  if (error instanceof TypeError) {
    console.log(`Se ha presentado un error de tipo:`, `${error.message}`);
  } else if (error instanceof Error) {
    console.log(`Se ha presentdado un error:`, `${error.message}`);
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

myValues = [2.3, 5.4, "A", "S"];
for (let valor of myValues) {
  try {
    let decimalValue = parseFloat(valor);
    if (isNaN(decimalValue)) {
      throw new Error(`${valor} no es un valor valido`);
    }
    console.log(`Transformado: ${decimalValue}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.

function validatePlayer(player, property) {
  if (!player.hasOwnProperty(property)) {
    throw new personalError(`La propiedad "${property}" no esta en el objeto`);
  }
  return player[property];
}
try {
  let gamer = { nickname: "Flavio", power: "fly" };
  console.log(validatePlayer(gamer, "nickname"));
  console.log(validatePlayer(gamer, "weapons"));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.

// let remainingAttemps = 10
// let autorized
// while (remainingAttemps > 0) {
//   autorized = false
//   console.log("Intento conexión", remainingAttemps)
//   if (autorized == false) {
//     remainingAttemps--
//   }
// }

function retryConnection(autorized) {
  let retries = 10;
  let attempts = 0;
  let connection = false
  while (attempts < retries) {
    try {
      if(connection != true) {
        attempts++
        throw new Error(`Conexión fallida, intento`)
      }
    } catch (error) {
      console.log(error.message, attempts)
    }
  }
  // return attempts
}

retryConnection(false)
