'use strict'

var pelicula = {
    titulo : 'batman vs superman',
    year : 2017,
    pais: 'estados unidos'
}

var peliculas = [
    {
        titulo: 'la verdad duele',
        year: 2016,
        pais: 'francia'
    },
    pelicula
]

var caja_peliculas = document.querySelector('.peliculas')

pelicula.titulo = 'superman begins'
for (const index in peliculas) {
    var p = document.createElement('p')
    p.append(`${peliculas[index].titulo} - ${peliculas[index].year}`)
    // p.append(peliculas[index].titulo + " - " + peliculas[index].titulo)
    // document.write(`${peliculas[index].titulo} - ${peliculas[index].year} <br> `)
   caja_peliculas.append(p)
}

