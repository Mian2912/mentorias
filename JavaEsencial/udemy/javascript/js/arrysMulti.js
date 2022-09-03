'use strict'

var categorias = ['Accion','Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella','Gran torino'];
var cine = [categorias,peliculas];
console.log(cine[0][1]);
peliculas.push('batman')
console.log(cine[1][3]);

var elemento = "";

do {
    elemento = prompt('Introduce tu pelicula');
    peliculas.push(elemento);
} while (elemento != 'acabar');

peliculas.pop();
peliculas.sort();

peliculas.forEach((elemento)=>{
    document.write(`<li>${elemento}</li>`)    
    
})
