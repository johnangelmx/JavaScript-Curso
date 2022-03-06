function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola " + nombre);
  return [1, 2];
  console.log("soy un codigo que esta despues del return");
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};
const saludarFlecha = () => {
  console.log("Hola Flecha");
};
const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};
const retornoDeSaludar = saludar("Fernando", 40, true, "costa rica"); //1
// console.log(retornoDeSaludar[0],retornoDeSaludar[1]);
// // saludar2("Fernando");
// saludarFlecha();
// saludarFlecha2("Angel");

function sumar(a, b) {
  return a + b;
}
const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
console.log(sumar2(2, 2));
console.log(sumar(1, 2));
