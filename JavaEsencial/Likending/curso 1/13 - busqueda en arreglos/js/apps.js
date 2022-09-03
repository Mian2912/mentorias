"use strict"

//****************************************
//*** Iterando arreglos con for....in

var platillos = ["Ceviche", "Tacos", "Pasta"]

// for (let platillo in platillos) {
//     console.log(platillos[platillo])
// }

//****************************************
//*** Iterando arreglos con forEach

// platillos.forEach(platillo => console.log(platillo));

// platillos.forEach((platillo, index) => console.log(index, platillo));


//****************************************
//*** buscando en un platillo

// var pElegido = platillos.find(platillo => platillo == 'Pasta' )

// var menu = [
//     {nombre: 'Ceviche', precio: '20', pais: 'Peru'},
//     {nombre: 'Tacos', precio: '10', pais: 'Mexico'},
//     {nombre: 'Pasta', precio: '50', pais: 'Italia'}
// ]

// var pElegido = menu.find(platillo => platillo.nombre == 'Tacos')

// console.log(pElegido) 

//****************************************
//*** Busqueda de Indice de Elementos

// var menu = [
//     {
//         nombre: 'Ceviche', 
//         precio: '20', 
//         pais: 'Peru'
//     },
//     {
//         nombre: 'Tacos', 
//         precio: '10', 
//         pais: 'Mexico'
//     },
//     {
//         nombre: 'Pasta',
//         precio: '50', 
//         pais: 'Italia'
//     }
// ]

// // var numPlatillos = platillos.findIndex(platillo => platillo == 'Tacos')

// var numPlatillos = menu.findIndex(platillo => platillo.nombre == 'Pasta')

// console.log("Platillo numero: ", numPlatillos)

//****************************************
//*** Filtrar arreglos

// var menu = [
//     {
//         nombre: 'Ceviche', 
//         precio: 20, 
//         pais: 'Peru'
//     },
//     {
//         nombre: 'Tacos', 
//         precio: 10, 
//         pais: 'Mexico'
//     },
//     {
//         nombre: 'Pasta',
//         precio: 50, 
//         pais: 'Italia'
//     },
//     {
//         nombre: 'Quesadilla',
//         precio: 15,
//         pais: 'Mexico'
//     }
// ]

// var numPlatillos = menu.filter(platillo => platillo.pais == 'Mexico')

// console.log(numPlatillos)


//****************************************
//*** Validacion de elementos de un arreglo

var resultado = null

var menu = [
    {
        nombre: 'Ceviche', 
        precio: 20, 
        pais: 'Peru'
    },
    {
        nombre: 'Tacos', 
        precio: 10, 
        pais: 'Mexico'
    },
    {
        nombre: 'Pasta',
        precio: 50, 
        pais: 'Italia'
    }
]

// resultado = menu.some( platillo  => platillo.precio <= 10)
// console.log("¿Hay platillos abajo de 200 ? ", resultado)

resultado = menu.every( platillo  => platillo.precio <= 60)
console.log("¿Todos los platillos cuestan menos de 60?", resultado)