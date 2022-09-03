'use strict'
const ejercicio = document.querySelector('#ejercicio')
const title = document.querySelector('#title')
var numero = parseInt(prompt('Ingrese el primero numero'));
var numero2 = parseInt(prompt('Ingrese el segundo numero'));

title.textContent=`los numeros impares que hay entre el numero ${numero} y el numero ${numero2}`;

while (numero < numero2) {
    numero++;
    if(numero%2 != 0){
        console.log(`numero impares ${numero}`)
        document.write(`numero impares ${numero} <br>`);
    }
}