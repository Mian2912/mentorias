"use strick"

/**** CICLOS ****/

//
// cICLOS | LOOPS | ITERADORES
//
// 2 tipos: Definidos e indefinidos
//
//DEfinidos: Ciclo FOR
//
// Indefinidos: Ciclo WHILE Y Ciclo DO ...WHILE

/*********************/

//**********************************
//**** Ciclo FOR | Ciclo Definido
//Repeticion = iteracion

var productos = 5

/*
for (let contador = 0; contador < productos; contador++) {
    console.log("Producto # " + contador)
    debugger
}
*/

//**********************************
//**** Ciclo while
//*** Iteracion indeterminada o desconocida
/*
while(productos > 0){
    console.log("producto vendido")
    productos--
    debugger
}
*/
//**********************************
//**** Ciclo Do while
//*** Iteracion indeterminada o desconocida
/*
do {
    console.log("Producto vendido")
    productos--
    debugger
} while (productos>=1)
*/

//**********************************
//**** Control de Ciclos
//*** break | continue

var contador = 0
var cuenta = 0
for (let contador = 0; contador <= 20; contador++) {
    if(contador == 5){
        break
    }
    if(contador % 2 == 0) {
        continue
    }
    cuenta++
    debugger
}

console.log("Hay " + cuenta + " numeros impares")