'use strict';

const io = require( 'socket.io-client' );
const airSocket = io.connect( 'http://localhost:3005/airline' );
const bestSocket = io.connect( 'http://localhost:3005' );


bestSocket.on( 'new-flight', ( details ) => {
    setTimeout( () => {
        console.log( `Pilot: flight with ID '${details.flightID}' took-off` );
        airSocket.emit( 'took-off', details );
    }, 4000 );
    setTimeout( () => {
        console.log( `Pilot: flight with ID '${details.flightID}' arrived` );
        bestSocket.emit( 'arrived', details );
    }
        , 7000 );
} );