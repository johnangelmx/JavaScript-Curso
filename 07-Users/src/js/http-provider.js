const jokeURL = "https://api.chucknorris.io/jokes/random";
const usuariosURl = 'https://reqres.in/api/users?page=2'

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeURL)

        if (!resp.ok) throw (`No se pudo realizar la peticion`)


        const { icon_url, id, value } = await resp.json()
        return { icon_url, id, value }

    } catch (error) {
        throw error
    }

}

const obtenerUsuarios = async () => {
    try {

        const resp = await fetch(usuariosURl)
        if (!resp.ok) throw (`No se pudo realizar la peticion`)
        const { data: usuarios } = await resp.json()
        return usuarios;
        
    } catch (error) {
        throw error
    }


}


export {
    obtenerChiste,
    obtenerUsuarios
}