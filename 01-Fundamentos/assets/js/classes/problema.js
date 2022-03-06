// Ok esto se debe de crear con la palabra new

const fher = {
  nombre: 'Fernado',
  edad: 30,
  imprimir () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
  }
}
const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
  }
}
// fher.imprimir()
// pedro.imprimir()

function Persona (nombre, edad) {
  console.log(`Se ejecuto esta linea`)
  this.nombre = nombre
  this.edad = edad
  this.imprimir = () => {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
  }
}
const maria = new Persona('Maria', 18)
console.log(maria)
const melissa = new Persona('Melissa', 35)
console.log(maria)
maria.imprimir()
melissa.imprimir()
