'use strict'

var title = document.querySelector('#title')
var numero = parseInt(prompt('ingrese un numero',0));
title.textContent = `la tabla de multiplicar del ${numero}`
for (let i = 0; i < 11; i++) {
    document.write(`${numero} x
     ${i} = ${(numero*i)} <br>`)
}