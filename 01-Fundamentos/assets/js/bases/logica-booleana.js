const regresaTrue = () => {
  console.log("regresa true imbecil");
  return true;
};

const regresaFalse = () => {
  console.log("regresa False imbecil");
  return false;
};

console.warn("NOt o la negacion");
console.log(true); // true
console.log(!true); // false
console.log(!false); //true

//! Se puede hacer la negacion con cualquier valor booleano

console.log(!regresaFalse());

// ! operador and
console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log("==================");
console.log(regresaFalse() && regresaTrue()); //false
// solo se ejecuto la primera funcion
console.log("==================");
console.log(regresaTrue() && regresaFalse()); //false
console.log("==================");
regresaTrue() && regresaFalse();

console.warn("OR"); //solo una unica condicion
console.log(true || false); //true
console.log(false || false); //false
console.log("==================");
console.log(regresaTrue() || regresaFalse());
console.log("==================");

console.warn("Asiganaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola mundo" && 150; // ?
const a2 = "Hola" && "Mundo" && soyFalso && true;
const a3 = soyFalso || "Ya no soy falso";
const a4 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || "Ya no soy falso de nuevo" || true;


console.log({ a1, a2, a3, a4, a5 });
