'use strict'

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 1234,
        host: "localhost"
    });

    await server.register({
        plugin: require('hapi-geo-locate'),
        options: {
            enabledByDefault: false
        }
    });

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return "<h1>Welcome to my website!</h1>";
            }
        },
        {
            method: 'GET',
            path: '/users/{user?}',
            handler: (request, h) => {
                if (request.params.user) {
                    return `<h1>Hello ${request.params.user}</h1>`;
                } else {
                    return "<h1>Hello Stranger!</h1>";
                }

            }
        },
        {
            method: 'GET',
            path: '/queryParams',
            handler: (request, h) => {
                if (request.query.firstName && request.query.lastName) {
                    let { firstName, lastName } = request.query;
                    return `<h1>Hello ${firstName} ${lastName}!`;
                } else {
                    return '<h1>Who are you?</h1>'
                }
            }
        },
        {
            method: 'GET',
            path: '/redirectMe',
            handler: (request, h) => {
                return h.redirect('/');
            }
        },
        {
            method: 'GET',
            path: '/location',
            handler: (request, h) => {
                const location = request.location;
                console.log(location);
                if (location) {
                    return "Your location is " + location.ip;
                } else {
                    return "Your location is not enabled by default.";
                }
                
            }
        },
        {
            method: '*',
            path: '/{any*}',
            handler: (request, h) => {
                return "<h1>You must be lost!</h1>";
            }
        }
    ]);

    await server.start();
    console.log("Listening on " + server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();