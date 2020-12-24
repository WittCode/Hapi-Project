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
        path: '/blogs',
        handler: (request, h) => {
            const blogPosts = [
                {
                    name: 'Tom',
                    description: 'I love soccer!'
                },
                {
                    name: 'Greg',
                    description: 'I love the outdoors!'
                }
            ];
            return h.view('blogs', blogPosts)
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