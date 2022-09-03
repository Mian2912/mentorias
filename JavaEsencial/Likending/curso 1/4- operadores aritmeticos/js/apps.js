"use strick"

//***********************
//*** Operadores relacionales

    var datosA = 10;
    var datosB = 20;


    console.log("Operadores Relacionales")
    // MAYOR QUE >
    var mayorQue = datosA > datosB
    console.log("Es " + datosA + " mayor que " + datosB + ": " + mayorQue)


    // MENOR QUE <
    var menorQue = datosA < datosB
    console.log("Es " + datosA + " menor que " + datosB + ": " + menorQue)

    // MAYOR O IGUAL QUE >=
    var mayorOIgualQue = datosA >= datosB
    console.log("Es " + datosA + " mayor o igual que " + datosB + ": " + mayorOIgualQue)

    //MENOR O IGUAL QUE <=
    var menorOIgualQue = datosA <= datosB
    console.log("Es " + datosA + " menor o igual que " + datosB + ": " + menorOIgualQue)

    // IGUAL QUE ==
    var igualQue = datosA == datosB
    console.log("Es " + datosA + " igual que " + datosB + ": " + igualQue)

    // NO ES IGUAL QUE O ES DIFERENTE QUE !=
    var noEsIgualQue = datosA != datosB
    console.log("Es " + datosA + " no es igual que " + datosB + ": " + noEsIgualQue)

    //Operadores Logicos
    console.log("\nOperadores Logicos")
    //OPERADOR Y O AND - &&
    var and = (datosA > 10 && datosB > 10)
    console.log("el resultado de la evalucion AND es " + and)

    // OPERADOR O U OR - ||
    var or = (datosA > 10 || datosB > 10)
    console.log("el resultado de la evalucion OR es " + or)

    // OPERADOR DE NEGACION O NOT - 
    var not = !(datosA > 10)
    console.log("el resultado de la evalucion OR es " + or)

    //Operadores De Asignacion
    console.log("\nOperadores De Asignacion")

    // ASIGNACION SIMPLE
    var igual = datosA
    console.log("El resultado de la asignacion simple es: " + igual)
    
    // SUMAR Y ASIGNAR
    var masIgual  = 10;
    masIgual += datosA
    console.log("El resultado de la asignacion += es: " + masIgual)

    // RESTAR Y ASIGNAR
    var menosIgual = 10;
    menosIgual -= datosA
    console.log("El resultado de la asignacion -= es: " + menosIgual)

    // MULTIPLICAR Y ASIGNAR
    var porIgual = 10;
    porIgual *= datosA
    console.log("EL resultado de la asignacion *= es: " + porIgual)

    // DIVIDIR Y ASIGNAR
    var entreIgual = 10;
    entreIgual /= datosA
    console.log("El resultado de la asignacion /= es: " + entreIgual)

    // OPERADOR NEGATIVO
    console.log("\nOperadores Negativos")
    datosB = -datosA
    console.log("El valor de datosA es " + datosA + ", despues del operador negativo datosB: " + datosB)

    // OPERADORES DE CONCATENACION
    console.log("\n Operadores De Concatenacion")
    var nombre = "Miguel"
    var apellido = "Herrera"
    
    // CONCATENACION DE NUMEROS
    var concatNumeros = datosA + datosB
    console.log("Los numeros " + datosA + " y " + datosB + " usando como numeros concatenados hacen una suma igual a " + concatNumeros)

    // CONCATENACION DE CADENAS DE TEXTO
    var concatTexto = nombre + " " + apellido
    console.log("Los textos " + nombre + " y " + apellido + " se unen para formar: " + concatTexto)

    // CONCATENACION DE NUMEROS COMO TEXTO
    var concatNumComoTxt = "2" + "8"
    console.log("Los numeros 2 y 8 usados como texto se unen para formar: " + concatNumComoTxt)

    // CONCATENACION DE TEXTO Y NUMERO
    var concatTxtNum = datosA + "8";
    console.log("El numero " + datosA + " usado como numero y 8 como texto se unen para formar " + concatTxtNum)

    //OPERADORES TERNARIOS O CONDICIONAL
    console.log("\nOperadores Ternarios o Condicional")
    //condicion ? true : false
    var resultado = datosA > datosB ? "Si es mayor" : "No es mayor"
    console.log("El resultado con el operador ternario u operador condicional es: ", resultado)

    //OPERADOR DE TIPO DE DATOS 
    console.log("\nOperador De Tipo De Datos")
    var activo = true
    var persona ={
        edad : 34,
        deporte: "futbol"
    }

    console.log(typeof datosA)
    console.log(typeof nombre)
    console.log(typeof activo)
    console.log(typeof persona)
    console.log(typeof persona.edad)
    console.log(typeof persona.deporte)


    var a, b, c;
    a = b = c = 5
    a += b *= c /= 5
    console.log("a = " + a)
    console.log("b = " + b)
    console.log("c = " + c)

    console.log(11 % 2)

    


    