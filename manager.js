const events = require( './events.js' );

const { faker } = require('@faker-js/faker');

require( './system.js' );
require( './pilot.js' );

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
    events.emit( 'new-flight', details );
}, 10000 );

events.on( 'arrived', ( details ) => {
    console.log( `Manager: we’re greatly thankful for the amazing flight, ${details.pilot}` );
} );