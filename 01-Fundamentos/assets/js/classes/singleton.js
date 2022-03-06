// singleton instancia unica de mi clase
class Singleton {
    static #instancia; //undefined
    nombre = ''
    constructor(nombre = '') {

        if (Singleton.#instancia) {
            return Singleton.#instancia
        } else {
            Singleton.#instancia = this
            this.nombre = nombre
        }
        // return this
    }
}

const instancia1 = new Singleton('Ironman')
const instancia2 = new Singleton('Spiderman')
const instancia3 = new Singleton('BlackPanther')
console.log(`nombre en la instancia es : ${instancia1.nombre}`)
console.log(`nombre en la instancia es : ${instancia2.nombre}`)
console.log(`nombre en la instancia es : ${instancia3.nombre}`)