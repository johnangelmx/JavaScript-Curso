import { subirArchivo } from "./cloud-provider";

const body = document.body
let inputFile, imgFoto;

const crearinputFileHTML = () => {
    const html = `
    <h1 class="mt-5">Subir Archivos</h1>
    <hr>
    <label>Selecciona una fotografia:</label>
    <input type="file" accept="image/png, image/jpeg">
    <br>
    <img id="foto" class="img-thumbnail" src="">

    `
    const div = document.createElement('div')
    div.innerHTML = html
    body.append(div)

    inputFile = document.querySelector('input')
    imgFoto = document.querySelector('#foto')

}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0]
        console.log(file)
        subirArchivo(file).then(url => imgFoto.src = url)
    })
}



export const init = () => {
    crearinputFileHTML()
    eventos()
}