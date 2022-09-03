'use strict'

var numeros = [];

do {
    var elemento = parseInt(prompt('Ingrese 6 numeros', 0));
    numeros.push(elemento);
} while (numeros.length < 6);

numeros.forEach((elemento) => {
    document.write(`<li>${elemento}</li>`) 
    console.log(elemento)
})

document.write('<h3>Ordenando el array</h3>');
document.write(`${numeros.sort(function(a, b){return a-b})}`);

document.write('<h3>invertiendo el array</h3>');
document.write(`${numeros.reverse()}`);

document.write(`<h3>La cantidad de elementos del arrays son </h3> ${numeros.length}`);

var busqueda = parseInt(prompt('introduscaun numero para buscarlo'));

document.write('<h1>Busqueda de un numero</h1>');
var numeroExistente = numeros.find(element => element == busqueda);
if(numeroExistente != undefined){
    document.write(`Numero escontrado ${numeroExistente}`); 
}else{
    document.write(`Numero no escontrado`); 
}
 