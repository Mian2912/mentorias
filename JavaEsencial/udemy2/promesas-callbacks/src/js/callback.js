const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin Morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'La mejor raccion alergica a las picaduras de las arañas'
    }
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if(heroe){
        callback(null, heroe);
    }else{
        callback(`No existe un heroe con el id ${id}`);
    }
} 

