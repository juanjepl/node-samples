//var events = require('events');
//var eventEmitter = new events.EventEmitter(); //Creo el objeto eventEmitter
//eventEmitter.on('eventName', eventHandler); //enganchar el evento con el handler
//eventEmitter.emit('eventName'); // disparar el evento

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");