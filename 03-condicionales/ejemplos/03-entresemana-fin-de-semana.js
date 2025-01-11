/** Elaborar un algoritmo que capture un dia de la semana y arroje los siguientes mensajes:
 * Si es un dia entre lunes y viernes, el mensaje debe decir "Entre semana"
 * Si es un dia entre sabado y domingo, el mensaje debe decir "Fin de semana"
 * Si no es un dia valido, el mensaje debe decir "Aterriza eso no es un dia conocido"
*/

const dia = 'domingo';

// switch( dia ) {
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         console.log( 'Entre semana' );
//         break;
//     case 'sabado':
//     case 'domingo':
//         console.log( 'Fin de semana' );
//         break;
//     default:
//         console.log( 'Aterriza eso no es un dia conocido' );
// }


if( dia == 'lunes' || dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes' ) {
    console.log( 'Entre semana' );
}
else if ( dia == 'sabado' || dia == 'domingo' ) {
    console.log( 'Fin de semana' );
}
else {
    console.log( 'Aterriza eso no es un dia conocido' );
}