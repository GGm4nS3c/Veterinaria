import { registrarMascota, leer } from "./operaciones.js";

// Get command-line arguments.
// process.argv[0] is node, process.argv[1] is script path, process.argv[2] is the operation, the rest are parameters.
const args = process.argv.slice(2);
const operacion = args[0];


console.log( "Se esta realizando la operacion: ", operacion);

if (operacion === "registrar") {
  const [ , nombre, edad, animal, color, enfermedad] = args;
  registrarMascota({
    nombre,
    edad,
    tipo: animal,
    color,
    enfermedad,
  });
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operacion no reconocida.");
}
