interface GrupoMusical {
  nombre: string;
  añoDeFundacion: number;
  activo: boolean;
  genero: string;
}
//Generos
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = " 🤘 Hard Rock";
const clasica = "🎼 Clásica";

const grupo1: GrupoMusical = {
  nombre: "The Beatles",
  añoDeFundacion: 1960,
  activo: true,
  genero: popRock,
};
const grupo2: GrupoMusical = {
  nombre: "Queen",
  añoDeFundacion: 1970,
  activo: false,
  genero: rock,
};
const grupo3: GrupoMusical = {
  nombre: "AC DC",
  añoDeFundacion: 1973,
  activo: true,
  genero: hardRock,
};
const grupo4: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  añoDeFundacion: 1770,
  activo: false,
  genero: clasica,
};
const grupo5: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoDeFundacion: 1962,
  activo: true,
  genero: rock,
};

const estilosNombre =
  "color: black ; font-weight: bold ; font-size: 24px ; background-color: green ";

console.log(`%c${grupo1.nombre}`, estilosNombre);
console.log(grupo1.añoDeFundacion);
console.log(grupo1.activo);
console.log(grupo1.genero);

console.log("****************"); 

console.log(`%c${grupo2.nombre}`, estilosNombre);
console.log(grupo2.añoDeFundacion);
console.log(grupo2.activo);
console.log(grupo2.genero);

console.log("****************");

console.log(`%c${grupo3.nombre}`, estilosNombre);
console.log(grupo3.añoDeFundacion);
console.log(grupo3.activo);
console.log(grupo3.genero);

console.log("****************");

console.log(`%c${grupo4.nombre}`, estilosNombre);
console.log(grupo4.añoDeFundacion);
console.log(grupo4.activo);
console.log(grupo4.genero);

console.log("****************");

console.log(`%c${grupo5.nombre}`, estilosNombre);
console.log(grupo5.añoDeFundacion);
console.log(grupo5.activo);
console.log(grupo5.genero);
