module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('home');
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return h.view('lost')
        }
    }


];