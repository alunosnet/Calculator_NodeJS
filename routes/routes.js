module.exports = function(server){
    
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request){
            var data={
                msg: 'API Calculator'
            };
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/calculator/sum/{n1}/{n2}',
        handler: function(request){
            const n1=parseInt(request.params.n1);
            const n2=parseInt(request.params.n2);
            var data={
                result: n1+n2
            };
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/calculator/sub/{n1}/{n2}',
        handler: function(request){
            const n1=parseInt(request.params.n1);
            const n2=parseInt(request.params.n2);
            var data={
                result: n1-n2
            };
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/calculator/mult/{n1}/{n2}',
        handler: function(request){
            const n1=parseInt(request.params.n1);
            const n2=parseInt(request.params.n2);
            var data={
                result: n1*n2
            };
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/calculator/div/{n1}/{n2}',
        handler: function(request){
            const n1=parseInt(request.params.n1);
            const n2=parseInt(request.params.n2);
            var data={
                result: n1/n2
            };
            return data;
        }
    });
}