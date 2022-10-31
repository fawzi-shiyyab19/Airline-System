const events = require( './events.js' );
require( './system.js' );
require( './manager.js' );

events.on( 'new-flight', ( details ) => {
    setTimeout( () => {
        console.log( `Pilot: flight with ID '${details.flightID}' took-off` );
        events.emit( 'took-off', details );
    }, 4000 );
    setTimeout( () => {
        console.log( `Pilot: flight with ID '${details.flightID}' arrived` );
        events.emit( 'arrived', details );
    }
        , 7000 );
} );