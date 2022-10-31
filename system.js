'use strict';

require( './manager.js' );
require( './pilot.js' );
const events = require( './events.js' );

events.on( 'new-flight', ( details ) => {
    console.log( `Flight {
        event: 'new-flight',
        time: ${new Date().toUTCString()},
        Details: {
            airline: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
} );

events.on( 'took-off', ( details ) => {
    console.log( `Flight {
        event: 'took-off',
        time: ${new Date().toUTCString()},
        Details: {
            airline: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
} );

events.on( 'arrived', ( details ) => {
    console.log( `Flight {
        event: 'arrived',
        time: ${new Date().toUTCString()},
        Details: {
            airline: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
} );