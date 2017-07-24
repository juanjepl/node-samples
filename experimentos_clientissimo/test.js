var http = require('http'); //importo el modulo http
var server = http.createServer(); //creo la instancia del servidor.
function control(petic, resp) { //esta funcion controlará las peticiones y respuestas.
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola, Mundo!');
    resp.end();
}
server.on('request', control); //Cuando recibo un request, llamo a la función 'control'
server.listen(8080)

// Log a consola
console.log('Servidor corriendo en http://127.0.0.1:8080/');