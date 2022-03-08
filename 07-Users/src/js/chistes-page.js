import { obtenerChiste } from "./http-provider";

const body = document.querySelector('body');
let btnOtro, olList;
let contador = 0;

const crearChistesHtml = () => {

    const html =
        `<h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro Chiste</button>
        <ol class="mt-2 list-group">
        </ol>
        `
    const divChistes = document.createElement('div')
    divChistes.innerHTML = html
    body.append(divChistes)
}

const eventos = async () => {
    contador = 1
    btnOtro = document.querySelector('button')
    olList = document.querySelector('ol')

    dibujarChiste(await obtenerChiste())

    btnOtro.addEventListener('click', async () => {

        btnOtro.disabled = true
        dibujarChiste(await obtenerChiste())
        btnOtro.disabled = false
    })


}
// {id,value}
const dibujarChiste = ({ id, value }) => {
    const olItem = document.createElement('li')
    olItem.innerHTML = `<b>${contador++}.- </b><em><b>${id}:</b></em> ${value}`
    olItem.classList.add('list-group-item')
    olList.append(olItem)
}

export const iniciacion = () => {
    crearChistesHtml()
    eventos()
}