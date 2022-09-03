$(document).ready(function(){
    // mouseover

    let caja = $('#caja');
    let minimo = 1;
    let maximo = 1024

    // caja.mouseover(function(){
    //     caja.css('background','green')
    // })
    
    // caja.mouseout(function(){
    //     caja.css('background','red')
    // })

    // evento click y dobleclick

    caja.click(function(){
        caja.css('background','blue')
    })
    
    caja.dblclick(function(){
        caja.css('background','tomato')
    })

    let input = $('input')
    input.focus(function(){
        input.css('border','2px solid green')
    })

    input.blur(function(){
        input.css('border','1px solid gray')
    })
})