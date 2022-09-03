'use strict'

var title = document.querySelector('#title');
var numero = parseInt(prompt('Ingrese un numero'));
title.textContent = `Los numeros divisible por ${numero} son: `;
for (let i =1; i < numero; i++) {
    if(numero % i == 0 ){
        document.write(`numero divisible de ${numero} es: ${i} <br>`)
    }
    
}