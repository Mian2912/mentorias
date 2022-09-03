'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var textoHora = `
    El Año es: ${year} 
    el mes es: ${mes}
    el dia es: ${dia}
`;
console.log(textoHora)