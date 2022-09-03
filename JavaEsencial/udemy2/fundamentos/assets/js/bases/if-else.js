'use strict';

let dia = 6;
const diasLetras = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sabado'
}

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ];
console.log(diasLetras2[dia] || 'dia no definido')
