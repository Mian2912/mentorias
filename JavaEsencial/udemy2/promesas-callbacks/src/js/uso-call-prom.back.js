import { buscarHeroe as buscarHeroeCallback} from './js/callback';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'iron';


// buscarHeroe( heroeId, (err,  heroe1) => {

//     if( err ) { return console.error(err); }

//     buscarHeroe( heroeId2, (err, heroe2) => {
        
//         if( err ) { return console.error(err); }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision `);
//     } )
// })

// buscarHeroe( heroeId ).then(heroe =>{
//     // console.log(`enviando a ${ heroe.nombre } a la mision`);
//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision `);
//     })
// })

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroes1,heroes2]) => {
        console.log(`Enviando a ${heroes1.nombre} y ${heroes2.nombre} a la mision `);
    }).catch( err => {
        alert(err)
    }).finally( () => {
        console.log("se termino el promise.all")
    })
