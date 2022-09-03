'use strict'
var title = document.querySelector('#title')

var numero = parseInt(prompt('Ingrese el primer valor', 0));
var numero2 = parseInt(prompt('ingrese el segundo valor', 0));
while(isNaN(numero) || isNaN(numero2)){
    numero = parseInt(prompt('Ingrese un numero valido', 0));
    numero2 = parseInt(prompt('ingrese un numero validor', 0));
}

var resultado = `El resultado de sumar ${numero} + ${numero2 } es ${(numero+numero2)} <br> 
El resultado de restar ${numero} - ${numero2} es ${(numero-numero2)} <br> 
El resultado de multiplicar ${numero} * ${numero2} es ${(numero*numero2)} <br>
EL resultado de dvidir ${numero} / ${numero2} es ${(numero/numero2)}`

var resultado1 = `El resultado de sumar ${numero} + ${numero2 } es ${(numero+numero2)}
El resultado de restar ${numero} - ${numero2} es ${(numero-numero2)} 
El resultado de multiplicar ${numero} * ${numero2} es ${(numero*numero2)} 
EL resultado de dvidir ${numero} / ${numero2} es ${(numero/numero2)}`

title.innerHTML = '<h1>Calculadora</h1>';

document.write(resultado)

console.log(resultado1)

alert(resultado1)


