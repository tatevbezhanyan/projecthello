var http = require("http");
var fs = require("fs");

function onRequest(request, response){
    response.writeHead(200,{"Content-Type": "text/html"});
    
        response.end(getRandomInt(1000000).toString());
}

http.createServer(onRequest).listen(8080);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }