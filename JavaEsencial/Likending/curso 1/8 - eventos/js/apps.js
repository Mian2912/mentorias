//************************
//*** Eventos Del Mouse
/*
const boton = document.querySelector('.boton')

boton.addEventListener('click', function(){
    console.log("el boton se ha pulsado")
})
boton.addEventListener('mouseover', function(){
    console.log("el mouse esta sobre el boton")
})
boton.addEventListener('mouseout', function(){
    console.log("el mouse esta fuera del boton")
})
*/

//************************
//*** Eventos Del Teclado

//keydown
//keypress
//keyup
/*
window.addEventListener("keydown", function(event){
    console.log("Pulsando tecla")
    console.log(String.fromCharCode(event.keyCode))
})
window.addEventListener("keypress", function(event){
    console.log("tecla pulsada")
})
window.addEventListener("keyup", function(event){
    console.log("tecla liberada")
})
*/

//************************
//*** Carga de documento
/*
window.addEventListener("load", function(){
    console.log("el contenido de la ventana se ha cargado")
})
*/

//*** Temporizadores o timers
//*********************************

// setInterval
// setTimeout

var temporizador = setInterval(() => {
    setColor()
}, 2000);
function setColor() {
    var pagina = document.body
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ?  "green" : "blue"
}

function stopChangeColor(){
    clearInterval(temporizador)
}
