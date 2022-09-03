'use strict';
const crearPersona = (nombre , apellido)=> ({ nombre, apellido});

const persona = crearPersona('Ingrid', 'Hernandez');
document.write(persona);

function imprimeArgumentos(){
    console.log(arguments);
}


const imprimeArgumentos2 = (edad , ...args) => {
    console.log(edad+'\n'+args)
}

imprimeArgumentos2(10,true, false, 'fernando', 'hola')