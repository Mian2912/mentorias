$(document).ready(function(){
    // selector con id
    let rojo = $('#rojo').css('background','red',).css('color','white').css('padding','20px');
    let amarillo = $('#amarillo').css('background','yellow',).css('color','green').css('padding','20px')
    let verde = $('#verde').css('background','green',).css('color','white').css('padding','20px')
    
    // selectores de clases
    let zebra = $('.zebra')
    zebra.css('padding','5px')

    //eventos
    $('.sinBorder').click(function(){
        $(this).addClass('zebra')
        console.log('click dado')
    })

    // selectores de etiqueta
    const parrafo = $('p')

    parrafo.click(function(){
        if(!$(this).hasClass('zebra')){
            $(this).removeClass('zebra')
        }else{
            $(this).addClass('zebra')
        }
    })
})
