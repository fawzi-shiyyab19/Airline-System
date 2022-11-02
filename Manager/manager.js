'use strict'
const io = require( 'socket.io-client' );
const socket = io.connect( 'http://localhost:3005' );
const { faker } = require('@faker-js/faker');

setInterval( () => {
    let city = faker.address.city();
    let country = faker.address.city();

    const details = {
        airline: 'Royal Jordanian Airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.internet.userName(),
        destination: `${city},${country}`,
    };
    console.log( `Manager: new flight with ID '${details.flightID}' have been scheduled` );
    socket.emit( 'new-flight', details );
}, 10000 );

socket.on( 'arrived', ( details ) => {
    console.log( `Manager: we’re greatly thankful for the amazing flight, ${details.pilot}` );
} );