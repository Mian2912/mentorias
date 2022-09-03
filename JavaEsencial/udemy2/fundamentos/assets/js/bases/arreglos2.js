'use strict';
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('%c Largo:', "color:blue; font-size: 15px;", juegos.length);

let primero = juegos[2-2];
let ultimo =  juegos[juegos.length-1];
console.log({primero, ultimo});

juegos.push('F-Zero');
juegos.unshift('Fire Emblem');
juegos.pop();

juegos.forEach((elemento, indice, arr) => console.log({elemento, indice, arr}));

let pos = 1;
juegos.splice(pos,1);

juegos.forEach((elemento, indice, arr) => console.log({elemento, indice, arr}));

let metroIndex = juegos.indexOf('Metroid');
console.log(metroIndex);


// TODO: Referencia

