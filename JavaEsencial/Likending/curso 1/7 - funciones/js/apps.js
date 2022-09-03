"use strick"

//*******************************
//*** Estructuras basica de una funcion

/*
function saludar(nombre ,edad){
    console.log("Hola " + nombre)
    console.log("edad " + edad) 
    var resultado = "nombre: "+ nombre + ", edad: " + edad + " Años"
    return resultado
}

var mensajes = saludar("miguel",22)
console.log(mensajes) 

//*******************************
//*** Inicializacion de parametros

function contar(cantidad = 20){
    console.log('Total: ', cantidad)
}
contar(30); 


//*******************************
//*** Parametros REST

function cocinar( ...masIngredientes){
  
    console.log("masIngredientes: ",masIngredientes[5])
}
cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "chile")


//*******************************
//*** Parametros SPREAD

function cocinar(ingredientes1, ingredientes2, ingredientes3, ...otros){
    console.log("Ingredientes1 : ", ingredientes1)    
    console.log("Ingredientes2 : ", ingredientes2)
    console.log("Ingredientes3 : ", ingredientes3)
    console.log("otros : ", otros)    
}
var ingredientesBase = ["pollo", "Tomate"]

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile")


//*******************************
//*** Fucion Anonima

(
    function(){
        var mensaje = "Hola de nuevo"
        console.log(mensaje)
    }
)()


var saludar = function (nombre){
    var mensaje = "hola "+ nombre
    return mensaje
}


//*******************************
//*** Callbacks

function calcular(datosA, datosB, sumarCB, restarCB){
    var suma = datosA + datosB
    var restar = datosA - datosB

    sumarCB(suma)
    restarCB(restar)
}

calcular(2,3, function(resultado){
    console.log("Suma " + resultado)
},function(resultado){
    console.log("resta " + resultado)
})

//*******************************
//*** Funcion Arrow | Fat Arrow | Lamda

var saludar = nombre => "hola " + nombre
console.log(saludar("susana"))

var sumar = cantidad => cantidad + 10
console.log(sumar(10))

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10,16))

var generar = (datoA, datoB) =>{
    var datoC = 5
    return datoA+datoB+datoC
}
console.log(generar(10,15))

var validar =() => {
    return 'validacion Correcta'
}
console.log(validar())
*/

//*******************************
//*** Uso del boton operador this

const boton = document.querySelector(".boton")
/*
boton.addEventListener('click', function(){
    console.log(this.innerHTML)
})
*/
boton.addEventListener('click',() =>{
    console.log(this)
    this.location = "http://www.google.com";
})
