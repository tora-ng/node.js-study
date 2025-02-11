var http = require('http');
var fs = require('fs');
var url = require('url');

const { log } = require('console');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log('queryData: ', queryData.id);

    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + _url);
    response.end(queryData.id);
 
});
app.listen(80);