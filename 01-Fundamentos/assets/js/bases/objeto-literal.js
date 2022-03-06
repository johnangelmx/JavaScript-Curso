const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.04,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity war",
};
console.log(personaje);
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad:", personaje.edad);
console.log("Cordenadas:", personaje.coords);
console.log("Latitud:", personaje.coords.lat);
console.log("No. Trajes:", personaje.trajes.length);
console.log("Ultimo Traje:", personaje.trajes[personaje.trajes.length - 1]);
const x = "vivo";
console.log("Esta vivo?:", personaje[x]);
console.log("Ultima Pelicula", personaje["ultima-pelicula"]);

//Mas detalles

//  eliminar propiedad en objetos
delete personaje.edad;
console.log(personaje);
//  Insertar una nueva propiedad en objeto 
personaje.casado = true;
console.log(personaje);
// Convertir objeto en un arreglo 
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
// Bloquear modificaciones en el objeto 
Object.freeze(personaje);
personaje.dinero = 10000000000;
personaje.casado = false;

// ! personaje.direccion.ubicacion = "costa rica";
console.log(personaje);
//  convertir en arreglo unicamente los nombres de las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
//  convertir en arreglo unicamente los valores de las propiedades
const valores = Object.values(personaje);
console.log({propiedades});
console.log({valores});
