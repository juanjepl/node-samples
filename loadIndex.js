var http = require('http');

// Para leer fichero
var fs = require('fs');
 
// Leo el fichero .html
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
	http.createServer(function (request, response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	}).listen(8080);
});


console.log("Listening on port 8080");


// En este ejemplo aún no renderizamos css ni añadidos.