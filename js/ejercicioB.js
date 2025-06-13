console.error('EJERCICIO B')
var numeroDeGatos 
var cantidadDePasos 
/* Estas son las dos variables con valores numericos libres, a las cuales les pongo un prompt para darles un valor */

var emojiGato = ' 🐈';
var emojiPasos = ' 🐾';

var resultado;

var cantidadDeFilasGatos = 10 //prompt('Cuantas filas de gatos quieres?');
var cantidadDeColumnasPasos = 10 //prompt('Cuantos pasos quieres por fila?');
    cantidadDePasos = cantidadDeColumnasPasos
/* ------------------------------------------ */

numeroDeGatos = cantidadDeFilasGatos

for(numeroDeGatos = 1; numeroDeGatos <= cantidadDeFilasGatos; numeroDeGatos++){


    emojiPasosConsola = emojiPasos.repeat(cantidadDePasos)

    resultado = 'Gato #' + numeroDeGatos +':' + emojiGato + emojiPasosConsola 
    console.log(resultado)
}


