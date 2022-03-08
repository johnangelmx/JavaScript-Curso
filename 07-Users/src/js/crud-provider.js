const urlCRUD = 'https://reqres.in/api/users'

const readUser = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`)
    const { data } = await resp.json()
    return data
}
const createUser = async (usuario) => {
    const resp = await fetch(urlCRUD, {
        method: "POST",
        body: JSON.stringify(usuario), //Enviar un objeto en JS a un objeto JSON
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(await resp.json())
    return true
}
const updateUser = async (id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(await resp.json())
    return true
}
const deleteUser = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    })
    return (resp.ok) ? 'Borrado' : 'No se puedo eliminar';
}





export {
    readUser,
    createUser,
    updateUser,
    deleteUser
}