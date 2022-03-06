import { buscarHeroe, buscarHeroeAsync } from "./promesas"


const heroesIds = ['capi', 'iron', 'spider',]
const heroesPromesas = heroesIds.map(buscarHeroe)

export const obtenerHeroesArr = async () => await Promise.all(heroesIds.map(id => buscarHeroe(id)))

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id)
        return heroe
    } catch (error) {
        console.warn('CATCH!!!');
        // throw error;
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
}

export const heroesCiclo = async () => {
    console.time('heroesC');

    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }


    console.timeEnd('heroesC');

    // const heroes = await Promise.all(heroesPromesas)
    // heroes.forEach(console.log);
}

export const heroeIfAwait = async (id) => {
    if ( (await buscarHeroeAsync('iron')).nombre === 'Ironman') {
        console.log('Es el mejor de todos')
    } else {
        console.log('Naaa!')
    }
}