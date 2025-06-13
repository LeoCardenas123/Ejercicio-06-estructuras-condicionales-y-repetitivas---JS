console.error('EJERCICIO C')
/* ------------------------ */
emojiNegro = '⬛'
/* ----------------------------- */
for(numeroDeGatos = 1; numeroDeGatos <= cantidadDeFilasGatos; numeroDeGatos++){

    emojiPasosConsola = emojiPasos.repeat(cantidadDePasos)

    if (numeroDeGatos % 2 == 0){
        resultado = 'Gato #'  + numeroDeGatos +':' + emojiGato + emojiNegro + emojiPasosConsola 
    }
    else{
        resultado = 'Gato #' + numeroDeGatos +':' + emojiGato + emojiPasosConsola 
    }
    console.log(resultado)
}

