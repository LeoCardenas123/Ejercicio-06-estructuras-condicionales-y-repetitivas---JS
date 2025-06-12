console.error('EJERCICIO A')

var cantidadDeGatos 

var cantidadIngresada = parseFloat(prompt('Cuantos gatos quieres?')) 

/* Declaro las variables cantidadDeGatos, y cantidadIngresada , la cual tiene un prompt para que sea pueda ser elegido por el usuario la cantidad de lineas que desea imprimir en la consola*/


/* asigno el valor 1 a cantidadDeGatos, y le digo al FOR, que cada vez que CantidadDeGatos sea menor o igual a cantidadIngresada añada una linea mas */
for(cantidadDeGatos = 1; cantidadDeGatos <=  cantidadIngresada; cantidadDeGatos++){
    
    var emojiDeGato 
    if(cantidadDeGatos % 2 == 0){
        emojiDeGato = '3'      
    }
    else if(cantidadDeGatos % 3 == 0){
        emojiDeGato = '2'      
    }
    else{
        emojiDeGato = '1'      
    }
    
    var textoSalida = 'Gato #' + cantidadDeGatos + ' ' + emojiDeGato
    console.log(textoSalida)
    
    /* tengo que modificar algunos detalles pero esta seria la base que usaria para elegir cual es el emojin que se va a imprimir en la consola */
}