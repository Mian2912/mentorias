'use strict'

// localStorage

if(typeof(Storage) !== 'undefined'){
    console.log('local disponible')
}else{
    console.log('local no disponible')
}

// guardar datos
localStorage.setItem('titulo','curso de synfony de victor robles')

// recuperar elemento
document.write(localStorage.getItem('titulo'));

// guardar objetos 
var usuario = {
    nombre: 'miguel herrera',
    correo: 'maashdj@gmail.com',
    web: 'victorroblesweb.es'
}

localStorage.setItem('usuario',JSON.stringify(usuario))

// recuperar objeto
var users = JSON.parse(localStorage.getItem('usuario'))

document.write(`<br> ${users.nombre}`)
localStorage.clear()
