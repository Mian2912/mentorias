 "use strict"

//*******************************
//*** Ventana de Alerta

const video = document.querySelector('.botonVideo')
/*
video.addEventListener("ended", function(){
    alert("MENSAJE \n el video ha terminado")
})
*/
//*******************************
//*** Ventana de confirmacion
/*
video.addEventListener("ended", function(){
    let resultado = confirm("Deseas ver el video nuevamente")
    console.log(resultado)
    if(resultado){
        video.play()
    }else{
        window.location= "http://www.google.com"
    }
})
*/
//*******************************
//*** Ventana de confirmacion
video.addEventListener("ended", function(){
   let email = prompt("Escribe tu correo para ver mas videos", "Correo@gmail.com")
   if(email == null || email == ""){
       console.log("sin datos")

   }else{
       console.log(email)
   }

})
