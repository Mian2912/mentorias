"use strict"

//*****************************************
//*** Creando tu primer arreglos

/*
var platillos =  ["Ceviche", "Tacos", "Pasta", "Tostadas"]
var bebidas = new Array("Jamaica", "Chicha Morada", "Pozol")

console.log(Array.isArray(platillos), bebidas)
*/
//*****************************************
//*** Medir Arreglos

/*
console.log("hay " + platillos.length + " Platillos en el menu")

var platillo = platillos[platillos.length-1]
console.log("El platillo seleccionado es: "+ platillo)
*/
//*****************************************
//*** Arreglos multidimensionales | Arreglo de Arreglos
/*
var paises = ["Peru", "Mexico","Italia"]

var menu = [platillos, paises]

console.log(menu[1][0])
*/

//*****************************************
//*** Operaciones basicas de un arreglo
/*
console.log('Antes: ', platillos)
platillos.push("Tostacos")
platillos.push("queso")

platillos.pop()
platillos.pop()

var mensaje = platillos.join()
console.log(mensaje)
console.log('Despues: ', platillos)
*/

//*****************************************
//*** Generaciones de arreglos con split() from() y of()
/*
//--- split()
var mensaje = "ceviche, tacos, pasta"
// var platillos = mensaje.split(', ')
//--- Array.from()
var platillosHtml = Array.from(document.querySelectorAll(".platillos p"))
var platillos = platillosHtml.map(platillo => platillo.textContent)

//--- Array.of()

var platillos = Array.of("ceviche", "tacos", "pasta")

console.log(platillos)
*/

//*****************************************
//*** Ordenando un arreglo
/*
var platillos = ["Ceviche", "Tacos", "Pasta", "Tostadas"]

console.log("Antes: ", platillos)
platillos.sort()
platillos.reverse()
console.log("Despues: ", platillos)
*/

//*****************************************
//*** Desestructuracion de arreglos

var platillos = ["Ceviche", "Tacos", "Pasta", "Tostadas"]

// var platillo = platillos[0]
// var platillo1 = platillos[1]
// var platillo2 = platillos[2]

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

var [platillo1, platillo2, platillo3, platillo4] = platillos

console.log(platillo1, platillo2, platillo3, platillo4)
