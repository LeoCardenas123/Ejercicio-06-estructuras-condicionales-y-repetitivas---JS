console.error('EJERCICIO C')
/* ------------------------ */
var numeroDeGatosC 
var cantidadDePasosC

var emojiGatoC = ' 🐈';
var emojiPasosC = ' 🐾';

var resultadoC;

var cantidadDeFilasGatosC = 12;
var cantidadDeColumnasPasosC = 8;
    cantidadDePasosC = cantidadDeColumnasPasosC
/* ------------------------------------------ */

numeroDeGatosC = cantidadDeFilasGatosC
/* ------------------------ */
emojiNegroC = '⬛'
/* ----------------------------- */
for(numeroDeGatosC = 1; numeroDeGatosC <= cantidadDeFilasGatosC; numeroDeGatosC++){

    emojiPasosConsolaC = emojiPasosC.repeat(cantidadDePasosC)

    if (numeroDeGatosC % 2 == 0){
        resultadoC = 'Gato #'  + numeroDeGatosC +':' + emojiGatoC + emojiNegroC + emojiPasosConsolaC 
    }
    else{
        resultadoC = 'Gato #' + numeroDeGatosC +':' + emojiGatoC + emojiPasosConsolaC 
    }
    console.log(resultadoC)
}

/* agrego un condicional if, para que se imprima en las filas pares un emoji negro despues del emoji de gato, es el mismo codigo de el ejercicio B*/