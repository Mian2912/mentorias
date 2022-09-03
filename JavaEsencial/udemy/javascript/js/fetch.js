'use strict'

let divUsuario = document.querySelector('.usuarios')
let div_janet = document.querySelector('#janet')
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuario(users.data);
        return getInfo()
    })
    .then(data => {
        console.log(data)

        return getJanet()
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data)
    })

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getInfo(){
    var profesor = {
        nombre: 'victor',
        apellidos: 'robles',
        url: 'https://www.victorrobles.com'
    }

    return new Promise((resolve, reject) => {
        var profesor_string = '';
        setTimeout(function(){
           profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
            return resolve(profesor_string);
        }, 3000);
    })
}

function listadoUsuario(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML=`${i} ${user.first_name} ${user.last_name}`;
        divUsuario.appendChild(nombre);
    });
}

function mostrarJanet(user){
    let nombre = document.createElement('h2')
    let avatar = document.createElement('img')
    nombre.innerHTML = `${user.first_name} ${user.last_name}` 
    avatar.src = user.avatar;
    avatar.width='100'
    div_janet.appendChild(nombre)
    div_janet.appendChild(avatar)
}