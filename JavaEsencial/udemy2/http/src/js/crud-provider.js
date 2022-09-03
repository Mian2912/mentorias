const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async (id) => {
    
    const resp = await fetch(`${urlCRUD}/${id}`);

    const {data} = await resp.json();

    return data;

}

const crearUsuario = async (usuarios) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-type': 'application/json'
        }
    });
    
    return await resp.json();
}

const actualizarUsuario = async (id, usuarios) => {
    const resp = await fetch(`${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-type': 'application/json'
        }
    });
    
    return await resp.json();
}

const eliminarUsuairo = async (id) => {

    const resp = await fetch(`${ urlCRUD }/${ id }`,{
        method: 'DELETE'
    })

    return ( resp.ok) ? 'Borrado': 'No se pudo eliminar';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuairo
}