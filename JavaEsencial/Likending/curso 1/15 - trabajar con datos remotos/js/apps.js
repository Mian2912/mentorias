"use strict"
//**************************************
//***Obteniendo datos con fetch

var boton = document.getElementById('boton')
var mensajes = document.getElementById('mensajes')
var contenedor = document.getElementById('contenedor')
var contBanderas = document.getElementById('banderas')
var posts = null

// boton.addEventListener('click', function(){
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json())
//     .then(data => {
//         posts = data
//         mostrarDatos(posts)
//     })
// })

// function mostrarDatos(posts) {
//     posts.map((post, i) => {
//         let titulo = document.createElement('h1')
//         let contenido = document.createElement('p')

//         titulo.innerHTML = (1 + 2) + " - " + post.title
//         contenido.innerHTML = post.body
        
//         contenedor.appendChild(titulo)
//         contenedor.appendChild(contenido)
//     })
// }

//**************************************
//*** Trabajando con promesas

boton.addEventListener('click', function(){
    getPost()
    .then(data => data.json())
    .then(posts => {
        mostrarDatos(posts)
        return getCountries()
    })
    .then(data => data.json())
    .then(countries => {
        mostrarBanderas(countries)
    })
    .catch(error => {
        mensajes.classList.toggle('hide')
        mensajes.innerHTML = error
        setTimeout(() => {
            mensajes.classList.toggle('hide')
        }, 3000);
    })
})
function getPost(){
    return fetch('http://jsonplaceholder.typicode.com/posts')

}

function getCountries(){
    return fetch('https://restcountries.com/v2/all')
}

function mostrarBanderas(countries){
    contBanderas.innerHTML = ''
    countries.map((country, i)=> {
        let bandera = document.createElement('img')
        bandera.src = country.flag
        bandera.width = '20'
        bandera.height = '20'
        contBanderas.appendChild(bandera)
    })
}

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1')
        let contenido = document.createElement('p')

        titulo.innerHTML = (1 + 2) + " - " + post.title
        contenido.innerHTML = post.body
        
        contenedor.appendChild(titulo)
        contenedor.appendChild(contenido)
    })
}