class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias'
    }
    static mensaje() {
        console.log(this.nombre) //undefined
        console.log('Hola a todos, soy un metodo estatico')
    }
    nombre = ''
    codigo = ''
    frase = ''
    comida = ''

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
        Persona._conteo++;
    }
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase()
    }
    get getComidaFavorita() {
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    miFrase() {
        this.quienSoy()
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino Spideman')
const ironman = new Persona('Tony Stark', 'Iron Man ', 'Yo soy Ironman puta')
spiderman.setComidaFavorita = 'El pie de cereza de la tia may'
console.log(spiderman.getComidaFavorita)
console.log(`Conteo Estatico ${Persona._conteo}`)
console.log(Persona.conteo)
Persona.mensaje()

Persona.propiedadEX = 'hola puta'
console.log(Persona.propiedadEX)
console.log(Persona)