/** Se deben evitar las anidaciones recurrentes ya que hacen menos legible nuestro codigo */

const equipo = 'Santa fe';

if ( equipo === 'Millonarios' ) {
    if( equipo === 'Santa Fe' ) {
        if( equipo === 'Santa Fe' ) {
            if( equipo === 'Santa Fe' ) {
                console.log( 'Mi mascota es un leon' );
            }
            else {
                console.log( 'No tengo mascota' );
            }
        }
        else {
            if( equipo === 'Santa Fe' ) {
                if( equipo === 'Santa Fe' ) {
                    if( equipo === 'Santa Fe' ) {
                        console.log( 'Mi mascota es un leon' );
                    }
                    else {
                        console.log( 'No tengo mascota' );
                    }
                }
                else {
                    if( equipo === 'Santa Fe' ) {
                        if( equipo === 'Santa Fe' ) {
                            console.log( 'Mi mascota es un leon' );
                        }
                        else {
                            console.log( 'No tengo mascota' );
                        }
                    }
                    else {
                        console.log( 'No tengo mascota' );
                    }
                }
            }
            else {
                console.log( 'No tengo mascota' );
            }
        }
    }
    else {
        console.log( 'No tengo mascota' );
    }
}
else {
    if( equipo === 'Santa Fe' ) {
        console.log( 'Mi mascota es un leon' );
    }
    else {
        console.log( 'No tengo mascota' );
    }
}