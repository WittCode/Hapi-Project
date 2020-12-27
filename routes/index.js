var blogs = [{ name: 'Tom', description: 'I love soccer!'}, 
{ name: 'Greg', description: 'I love the outdoors!'}];

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('home');
        }
    },
    {
        method: ['GET', 'POST'],
        path: '/createBlog',
        handler: (request, h) => {
            if (request.payload) {
                blogs.push({name: request.payload.username, description: request.payload.description});
                return h.view('blogs', blogs);
            }
            return h.view('createBlog');
        }
    },
    {
        method: 'GET',
        path: '/blogs',
        handler: (request, h) => {
            return h.view('blogs', blogs)
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