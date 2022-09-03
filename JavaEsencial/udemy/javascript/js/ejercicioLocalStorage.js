const form = document.querySelector('#form')
const formBorrarPelicula = document.querySelector('#formBorrarPelicula')
form.addEventListener('submit', function(e){
   
    let pelicula = document.querySelector('#addpelicula').value;
    if(pelicula.length >= 1){
        localStorage.setItem(pelicula, pelicula);
        console.log(localStorage)
    }
    
})
for (const i in localStorage ) {
    var li = document.createElement('li')
    if(typeof localStorage[i] == 'string'){
        li.append(localStorage[i]);
        var ul = document.querySelector('#pelicula-list');
        ul.append(li)
    }
}
formBorrarPelicula.addEventListener('submit',function(e){
    // e.preventDefault();
    var inputBorrar = document.querySelector('#borrarPelicula').value
    if(inputBorrar.length >= 1){
        localStorage.removeItem(inputBorrar)
    }
    
})

function mostrarPantalla(i){
    
}