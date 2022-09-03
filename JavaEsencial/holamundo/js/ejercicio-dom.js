let formulario = document.querySelector('#formulario');
var dashed = document.querySelector('.dashed')
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    dashed.style.display='block'
    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;

    var datos = [nombre, apellidos, edad]
    for (indice in datos) {
        var parrafo = document.createElement('p');
        parrafo.append(datos[indice]);
        dashed.append(parrafo);
    }    
})