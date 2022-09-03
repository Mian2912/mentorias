'use strict'
window.addEventListener('load', () =>{
    var tiempo = setInterval(() => {
      console.log('set interval ejecutado')  
      var encabezado = document.querySelector('h1')
      if(encabezado .style.fontSize =='50px'){
        encabezado .style.fontSize ='20px'
      }else{
        encabezado .style.fontSize ='50px'
      }
     
    }, 1000);

    var stop = document.querySelector('#stop')

    stop.addEventListener('click', function(){
        clearInterval(tiempo)
    })
})

