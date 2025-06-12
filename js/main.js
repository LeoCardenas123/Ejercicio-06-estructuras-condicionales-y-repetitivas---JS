console.error('EJERCICIO A')

var cantidadDeGatos 

var cantidadIngresada = 10 /* parseFloat(prompt('Cuantos gatos quieres?')) */


for(cantidadDeGatos = 1; cantidadDeGatos <=  cantidadIngresada; cantidadDeGatos++){
    
    var emojiDeGato 
    if(cantidadDeGatos % 2 == 0){
        emojiDeGato = '😸'      
    }
    else if(cantidadDeGatos % 3 == 0){
        emojiDeGato = '😹'      
    }
    else{
        emojiDeGato = '😺'      
    }
    
    var textoSalida = 'Gato #' + cantidadDeGatos + ' ' + emojiDeGato
    console.log(textoSalida)
}



/* switch (valor) {
  case 1:
    console.log('YO')
    break;
  case 2:
    console.log('aquel')
    break;
  default:
    console.log('error')
}  */