'use strict';

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    edad: 40,
    vivo: false,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-Pelicula': 'End Game' 
};

console.log(personaje)
console.log(`Nombre: ${personaje.nombre}`);
console.log(`Nombre: ${personaje['nombre']}`);
console.log(`Edad: ${personaje.edad}`);

console.log(`Coors: ${personaje.coords}`);
console.log(`Lat: ${personaje.coords.lat}`);

console.log(`No Trajes: ${personaje.trajes.length}`);
console.log(`UltimoTraje: ${personaje.trajes[personaje.trajes.length-1]}`);

const x = 'vivo';
console.log(`VIVO: ${personaje[x]}`);
console.log(`Ultima Pelicula: ${personaje['ultima-Pelicula']}`)

// mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Object.freeze(personaje);
personaje.casado = false;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);
