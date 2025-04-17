import { existsSync, readFileSync, writeFileSync } from "fs";

const registrarMascota = (mascota) => {
  let mascotas = [];

  if (existsSync("./citas.json")) {
    const data = readFileSync("./citas.json", "utf-8");
    mascotas = JSON.parse(data);
  } else {
    console.log("No existe el archivo se creará uno nuevo.");
  }

  mascotas.push(mascota);
  writeFileSync("./citas.json", JSON.stringify(mascotas, null, 2));
  console.log("Mascota registrada:", mascota);
};

const leer = () => {
  if (existsSync("./citas.json")) {
    const data = readFileSync("./citas.json", "utf-8");
    const mascotas = JSON.parse(data);
    mascotas.forEach((mascota) => {
      console.log(mascota);
    });
  } else {
    console.log("No existe el archivo citas.json.");
  }
};

export { registrarMascota, leer };

