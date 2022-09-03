const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios   = 'https://reqres.in/api/users?page=2';
import '../css/componentes.css';

const obtenerChiste = async () => {
    
    try {
        const resp = await fetch(jokeUrl);
    
        if( !resp.ok) throw 'No se pudo realizar la peticion';

        const {icon_url, id, value} = await resp.json();
            
        return {icon_url, id, value};

    } catch (error) {
        throw error;
    }
   
}

const obtenerUsuario = async () => {
    const resp = await fetch( urlUsuarios );
    const {data:usuarios} = await resp.json();

    return usuarios;
}

export {
    obtenerChiste,
    obtenerUsuario
}