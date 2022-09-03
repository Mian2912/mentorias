'use strict'
window.addEventListener('load', () => {
    var buttom = document.querySelector('#button')

    function cambiarColor(){
        var bg = buttom.style.backgroundColor
        if(bg == 'green'){
            buttom.style.backgroundColor='red'
            buttom.style.borderColor='red'
        }else{
            buttom.style.backgroundColor='green'
            buttom.style.borderColor='green'
        }
        buttom.style.padding="9px"
        buttom.style.borderWidth='1px'
        buttom.style.cursor='pointer'
        buttom.style.color='white'
        return true
    }
    // click evento 
    buttom.addEventListener('click', cambiarColor)
    // mouseover evento hover en css
    buttom.addEventListener('mouseover', cambiarColor)
    // mouseout evento de salidad de hover
    buttom.addEventListener('mouseout',cambiarColor)
    
    var nombre = document.querySelector('#nombre')
    
    // Focus
    nombre.addEventListener('focus', function(){
        console.log('[focus]]estas dentro del input')
    })
    
    // blur
    nombre.addEventListener('blur',function () {
        console.log('[blur]estas fuera del input')
    })
    // keydown
    nombre.addEventListener('keydown', function(event){
        console.log('[keydown]pulsando esta tecla', String.fromCharCode(event.keyCode))
    })
    // keypress
    nombre.addEventListener('keypress', function(event){
        console.log('[keypress]tecla presionada', String.fromCharCode(event.keyCode))
    })
    // keyup
    nombre.addEventListener('keyup', function(event){
        console.log('[keyup]tecla soltada', String.fromCharCode(event.keyCode))
    })
})
