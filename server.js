var http = require('http');
var fs = require('fs');

//normal server...
// var server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     // var readStream  = fs.createReadStream(__dirname+'/readMe.txt','utf-8');
//     var readStream  = fs.createReadStream(__dirname+'/index.html','utf-8');
//     readStream.pipe(res);
// });


//server with routing...!

var server = http.createServer(function(req,res){
    console.log('request was made:'+req.url);
    

    if(req.url === '/home' || req.url === '/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/index.html','utf-8').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html','utf-8').pipe(res);
    }else if(req.url === '/api/emp'){
        var displayEmp = [{
            name:'Chandra',
            id:'000hs6',
            city:'Hyderabad',
            home:'Odisha'
        }];
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(displayEmp));
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/404.html','utf-8').pipe(res);
    }
});

try {
    server.listen(8080,'127.0.0.1');
} catch (error) {
    console.log('this is the:'+error);
}


console.log("listening on port no 8080");
