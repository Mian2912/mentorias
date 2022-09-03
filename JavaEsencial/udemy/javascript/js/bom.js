'use strict'
// BOM - Browser Object Model

function getBom(){
    document.write(window.innerHeight,'<br>')
    document.write(window.innerWidth,'<br>')
    document.write(window.location)
}
function redirect(url){
    window.location.href=url
}

function abrirVentana(url){
    window.open(url,"","width=200,height=200")
}
getBom();