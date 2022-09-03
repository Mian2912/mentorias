//***************************
//*** Creando cadena de texto

// var pais = "Mexico";
// var comida = new String("ceviche");


//***************************
//*** Medir una cadena de texto

var mensaje = "Estoy aprendiendo Javascript"

// console.log("La cadena de texto tiene: "+ mensaje.length + " letras")


//***************************
//*** Metodos Busqueda | parte 1

var resultado;

// //indexOf()
// // resultado = mensaje.indexOf("aprendiendo");

// // lastIndexOf
// // resultado = mensaje.lastIndexOf("aprendiendo")

// //search:
// // resultado = mensaje.search("aprendiendo")

// // search | expresion regular
// resultado = mensaje.search(/ja/i)

// console.log(resultado)

//***************************
//*** Metodos Busqueda | parte 2

// match
// resultado = mensaje.match(/aprendiendo/gi)

// substr
// resultado = mensaje.substr(6,11)

// substring
// resultado = mensaje.substring(17,0)

// charAt
// resultado = mensaje.charAt(15)

//***************************
//*** Metodos Busqueda | parte 3

// startWich
// resultado = mensaje.startsWith("Es")

// var textoEn = mensaje.indexOf("Javascript")
// resultado = mensaje.startsWith("Ja", textoEn)

// endWitch
// resultado = mensaje.endsWith("mucho")

// includes
// resultado = mensaje.includes("Javascript", 18)

//***************************
//*** Metodos de generacion, reemplazo y separacion

// repeat
// resultado = mensaje.repeat(2)

//replace
// resultado = mensaje.replace("y estoy Aprendiendo mucho", "")

// slice
// resultado = mensaje.slice(6)
// resultado = mensaje.slice(6, 11)

// split
// resultado = mensaje.split(' ')

// trim
// resultado = mensaje.trim()

//******************************
//*** Metodos de transformacion

var mensaje1 = " y programacion"
var total = 123456

// resultado = total.toString()
// resultado = mensaje.toLowerCase()
// resultado = mensaje.toUpperCase()

// resultado = mensaje.concat(mensaje1, " y tengo muchas ideas")

//******************************
//*** Plantillas y literales

var lenguaje = 'JavaScript'
var lenguaje1 = 'HTML'
var mensaje2 = `me gusta ${lenguaje} y su integracion con ${lenguaje1}`

// console.log(mensaje2)

//******************************
//*** Mensajes Multilinea
var mensajeMultilinea = `
    hola mundo, 
    estoy aprendiedo 
    ${lenguaje} y me gusta
    como se integra con HTML y CSS
`
console.log(mensajeMultilinea)