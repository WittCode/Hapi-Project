'use strict'

const Hapi = require('@hapi/hapi');

const init = async() => {

    const server = Hapi.server({
        port: 1234,
        host: "localhost"
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "<h1>Hello World!</h1>";
        }
    });

    await server.start();
    console.log("Listening on " + server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log("soccer\n" + err);
    process.exit(1);
});

init();