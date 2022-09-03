'use strict'

var title = document.querySelector('#title')
title.textContent='numeros pares e impares';

var numero = parseInt(prompt('ingrese un numero',0));
while (isNaN(numero)) {
    numero = parseInt(prompt('ingrese un numero',0));
};
if(numero % 2 == 0){
    document.write(` El numero ${numero} es par`)
}else{
    document.write(` El numero ${numero} es impar`)
}