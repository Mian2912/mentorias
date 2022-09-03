'use strict'

// var edad1 = 18;
// var nombre = 'David Suarez';

// if(edad1 >= 18){
//     // ES mayor de edad
//     console.log(`${nombre} tiene ${edad1} años, es mayor de edad`);
// }else{
//     // Es menor de edad
//     console.log(`${nombre} tiene ${edad1} años, es MENOR de edad`);
// }

// for(var i = 0; i< 100; i++){
//     console.log(`numero: ${i}`)
// }

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <=0 ||isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}
if(numero1 == numero2) {
    alert("Los numeros son iguales")
}else if(numero1 > numero2){
    alert(`el numero mayor es: ${numero1}`)
    alert(`el numero menor es: ${numero2}`)

}else if(numero1 < numero2){
    alert(`el numero menor es: ${numero1}`)
    alert(`el numero mayor es: ${numero2}`)
}else{
    alert('INTRODUCE LOS NUMEROS CORRECTOS')
}
