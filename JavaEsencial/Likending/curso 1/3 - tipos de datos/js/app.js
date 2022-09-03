"use strick"
//trabajando con datos enteros
// var edad = 35
// var cantidad = "100"
// var nuevaCantidad = Number(cantidad)

// pasar cadenas de texto a enteros
// parseInt(cantidad)

//uso de las comillas simples y dobles
// var bebida = "agua"
// var comida = "ceviche"
// var instruccion = "el platillo se llama 'cevivhe'"

//forma de pasar numeros enteros a strings
// var edad = 34
// var edadtxt = String(edad)

//uso de datos boolenos
// var activo = false
// var estado = Boolean(10 < 9)

//uso de fechas
// var fecha = new Date()

//funcion para simbolos
// var simbolo1 = Symbol()
// var simbolo2 = Symbol()
// var ambiente = Symbol("dev")

//estructura json
// JSON => JavaScript Object Notation
var persona = {nombre: 'miguel', twitter: 'yacafx'}
var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

//convertir datos a cadenas de texto con JSON
// var personaJSON = JSON.stringify(persona)
// convertir cadenas de texto a datos con JSON
// var nuevaPersona = JSON.parse(personaJSON)

var fecha = new Date()
var dia = fecha.getDate()
console.log(dia)