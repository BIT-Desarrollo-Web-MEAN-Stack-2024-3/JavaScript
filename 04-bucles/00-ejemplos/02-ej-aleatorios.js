const numeroAleatorio = Math.random() * 10;     
//                      0.73453452525 * 7.3453452525   

const entero = Math.round( numeroAleatorio );  // Round redondea 
//         7 = Math.round( 7.3453452525 );      // 7 
//         7 = Math.floor( 7.3453452525 );      // 7  
//         7 = Math.ceil( 7.3453452525 );       // 8              
//         7 = numeroAleatorio.toFixed(0);

console.log( numeroAleatorio.toFixed( 0 ) );

const list = [];
console.log( list );    

/** 
 * Diseñar un algoritmo que:
 * 1. Capture un numero.
 * 2. Genere un numero aleatorio
 * 3. Compare el numero generado y el numero capturado
 *    Si hace match "Adivinaste el numero"
 *    Si NO hace match "Intentalo de nuevo"
 */