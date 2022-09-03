import { buscarHeroeAsync , buscarHeroe} from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );

export const obtenerHeroesArr = async () => {
    await Promise.all( heroesIds.map( buscarHeroe ));
}

export const obtenerHeroesAwait = async (id) =>{
    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;  
    } catch (error) {
        console.log('CATCH!!!');
        return {
           nombre: 'sin nombre',
           poder: 'sin poder'
        };
    }
    
}

export const heroesCliclo = async () => {

    console.time('heroesCiclo');

    // heroesPromesas.forEach( async ( p ) => console.log( await p))

    for await (const heroe of heroesPromesas){
        console.log(heroe)
    }
    
    console.timeEnd('heroesCiclo');
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(console.log)
}

export const heroeIfAwait = async (id) => {
    if ( (await buscarHeroe( id )).nombre === 'Ironman' ) {
        console.log('Es El mejor de Todos');
    }else {
        console.log('Naaaa');
    }
}