const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;
console.log(carros.length);
console.warn("while");
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }
while (carros[i]) {
  console.log(carros[i]);
  i++;
}
console.warn("Do-while");
let j = 10;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
