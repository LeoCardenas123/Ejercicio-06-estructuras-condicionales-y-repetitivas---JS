console.error('EJERCICIO A')

var cantidadDeGatos 

var cantidadIngresada = 10 /* parseFloat(prompt('Cuantos gatos quieres?'))  */

var emojiDeGato

var textoSalida 

/* Declaro las variables cantidadDeGatos, y cantidadIngresada , la cual tiene un prompt para que sea pueda ser elegido por el usuario la cantidad de lineas que desea imprimir en la consola*/


/* asigno el valor 1 a cantidadDeGatos, y le digo al FOR, que cada vez que CantidadDeGatos sea menor o igual a cantidadIngresada añada una linea mas */


for(cantidadDeGatos = 1; cantidadDeGatos <= cantidadIngresada; cantidadDeGatos++){

    if(cantidadDeGatos % 1.5 == 1){
        var emojiDeGato = 1111
    }
    else if(cantidadDeGatos % 3 == 0){
        emojiDeGato = 00 
    }
    else{
        emojiDeGato = 55
    }

    textoSalida = 'Gato #' + cantidadDeGatos + ' ' + emojiDeGato

    console.log(textoSalida)
    
} 


