let a = 5;

if (a >= 10) {
  // undefined , null , asignacion
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

// console.log("fin de programa");

const hoy = new Date(); // {}

let dia = hoy.getDay(); // 0:Domingo, 1:Lunes, 2: martes...

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, ni martes, ni domingo");
}

// Sin usar if else , o swtich, unicamente objetos y arreglos
dia = 1;

let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

console.log(semana[dia]);
let semanaDias = {
  0:"Domingo",
  1:"Lunes",
  2:"Martes",
  3:"Miercoles",
  4:"Jueves",
  5:"Viernes",
  6:"Sabado"
}
console.log(semanaDias[dia] || 'Dia no valido');