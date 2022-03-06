import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";
import "./styles.css";



const heroeId1 = 'capi'
const heroeId2 = 'spider'
const heroeId3 = 'iron'


// Promesa
// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) return console.error(err)

//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if (err) return console.error(err)

//         buscarHeroe(heroeId3, (err, heroe3) => {
//             if (err) return console.error(err)
//             console.warn(`Enviando a ${heroe1.nombre},  ${heroe2.nombre} y ${heroe3.nombre} a la mision`)
//         })
//     })

// })


// buscarHeroe(heroeId1).then(heroe1 => {
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.warn(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misison`);
//     })
// })


Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.warn(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misison`);
    }).catch((err) => {
        alert(err)
    }).finally(() => {
        console.log('Finally')
    })



console.log('fin de programa')
