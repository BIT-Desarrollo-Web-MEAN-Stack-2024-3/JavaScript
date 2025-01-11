const equipo = 'Santa fe';


( equipo === 'Millonarios' )
    ? console.log( 'Mi mascota es una gallina' )
    : ( equipo === 'Santa Fe' )
        ? console.log( 'Mi mascota es un leon' )
        : console.log( 'No tengo mascota' );


/** Abuso de la anidacion */        
( condicion ) 
    ? ( condicion ) 
        ? ( condicion ) ? 
            'verdadero' 
            : 'falso' 
        : 'falso' 
    : ( condicion ) 
        ? 'verdadero' 
        : ( condicion ) 
            ? 'verdadero' 
            : 'falso';