'use strict';

const Handlebars = require('handlebars');
const Hapi = require('@hapi/hapi');
const Path = require('path')
const routes = require('./routes');

const init = async() => {

    const server = Hapi.server({
        port: 1234,
        host: 'localhost'
    });

    await server.register([
        {
            plugin: require('@hapi/vision')
        }
    ]);

    server.views({
        engines: {
            hbs: Handlebars
        },
        path: Path.join(__dirname, 'views'),
        layout: 'default'
    });   

    server.route(routes);
    
    await server.start();

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();