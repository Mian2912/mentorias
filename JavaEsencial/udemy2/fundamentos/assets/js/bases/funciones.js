'use strict';

function saludar (name){
    console.log(arguments)
    console.log(`Hola Mundo Att: ${name}`);
    return 1;
};

const saludar1 = function(name){
    console.log(`Hola ${name}`);
}

saludar('luis', 40, true,'Costa Rica');
saludar('daniela');
saludar1('ingrid');



function getAleatorio (){
    return Math.random();
};

console.log(getAleatorio());

const get1 = () => Math.random();

console.log(get1())
