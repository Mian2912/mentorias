"use strick"

//****************
//**** Condicion IF

var datosA = 110
var datosB = 20
var datosc = 5
var resultado = "Sin datos"
/*
if( datosA > datosB){
    resultado = "La condicion se cumplio"
}
console.log("El resultado de la evaluacion if es: ",resultado)
*/
/*
//****************
//**** Condicion IF - ELSE

if( datosA > datosB ){
    resultado = "La condicion se cumplio"
}
else{
    resultado = "La condicion no se cumplio"
}
console.log("El resultado de la evaluacion if es: ",resultado)

*/
/*
//****************
//**** Condicion IF - ELSE -IF

if( datosA > datosB ){
    resultado = "La condicion se cumplio"
}
else if(datosB == datosA){
    resultado = "Segunda evaluacion verdadera"
}
else{
    resultado = "No se cumplio ninguna evaluacion"
}
console.log("El resultado de la evaluacion if es: ",resultado)
*/
/*
//****************
//**** Condicion anidadas

if( datosA > datosB ){
    resultado = "La condicion se cumplio"

    if(datosc < datosB){
        resultado = "evaluacion anidada verdadera"
    }
    else{
        resultado = "no se cumplio la evaluacion anidad"
    }
}
else{
    resultado = "La condicion no se cumplio"
}
console.log("El resultado de la evaluacion anidada es: ",resultado)
*/

//****************
//**** Estructura SWITCH

var edad = 40;
var resultado = ""
switch (edad) {
    case 10:
        resultado = "la edad es de 10 años"
        break;
    case 20:
        resultado = "la edad es de 20 años"
        break
    case 30:
        resultado = "la edad es de 30 años"
        break
    default:
        resultado = "ningun caso coincide"
        break;
}

//console.log("El resultado de la evaluacion con numeros es " + resultado)
/*
var producto = "Radio";
var resultado = ""
switch (producto) {
    case "TV":
        resultado = "Se elegio la TV"
        break;
    case "Radio":
        resultado = "Se eligio el Radio"
        break
    case "Telefono":
        resultado = "Se elegio el telefono"
        break
    default:
        resultado = "no se Eligio ningun producto"
        break;
}

console.log("el resultado de la evaluacion con texto es: ", resultado )*/

var a = 3
var b = 1 
var c = 2
var opcion

opcion = c % b
opcion += a
switch (opcion) {
    case 1:
        console.log("Opcion 1")
        break;
    case 2: 
        console.log("Opcion 2")
        break;
    case 3 :
        console.log("Opcion 3")
        break
    default:
        console.log("Ninguna opcion")
        break;
}