import { obtenerChiste } from './http-provider';
import '../css/componentes.css';

const body = document.body; 
let btnOtroChiste, olList; 

const crearChisteHtml = () =>{
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro Chiste</button>

        <ol class="mt-2 list-group">
        </ol>
    `;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = html;
    body.append(divChiste);
};

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async () => { 

        btnOtroChiste.disabled = true;

        dibujarChiste( await obtenerChiste());

        btnOtroChiste.disabled = false;
    });

}

const dibujarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `<strong>${chiste.id}</strong>: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

const crearHtml2 = () =>{
    const html = `
        <h1>Usuairos</h1>
        <hr>
        <table class="table table-dark table-borderless mt-2">
            <thead>
                <th>Id</th>
                <th>Avatar</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
            </thead>
            <tbody></tbody>
        </table>    
    `;

    body.innerHTML = html ;

    const tbody = document.querySelector('tbody');
}

const crearFilaUsuario = (usuario) => {
    console.log(usuario.name)
    const html = `
        <td class="col"></td>
        <td class="col"></td>
        <td class="col"></td>
        <td class="col"></td>
        <td class="col"></td>
    `;
}

export const init = () => {
    // crearChisteHtml();
    // eventos();
    crearHtml2();
}