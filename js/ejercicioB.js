console.error('EJERCICIO B')
/* ------------------------ */
var numeroDeGatos 
var cantidadDePasos 
/* Estas son las dos variables con valores numericos libres, a las cuales les pongo un prompt para darles un valor */

var emojiGato = ' 🐈';
var emojiPasos = ' 🐾';

var resultado;

var cantidadDeFilasGatos = 8;
var cantidadDeColumnasPasos = 6;
    cantidadDePasos = cantidadDeColumnasPasos
/* ------------------------------------------ */

numeroDeGatos = cantidadDeFilasGatos

for(numeroDeGatos = 1; numeroDeGatos <= cantidadDeFilasGatos; numeroDeGatos++){


    emojiPasosConsola = emojiPasos.repeat(cantidadDePasos)

    resultado = 'Gato #' + numeroDeGatos +':' + emojiGato + emojiPasosConsola 
    console.log(resultado)
}

/* Con esta función for, determino la cantidad de filas de gatos y la cantidad de columnas de pasos que se van a imprimir */
