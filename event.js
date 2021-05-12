var events = require('events');

var eventEmitter = new events.EventEmitter();

var callback = function connected(){
    console.log("Connection Successful");

    eventEmitter.emit("data_received");
}


// event와 evnetHandler Bind
eventEmitter.on('myEvent', callback);

eventEmitter.on('data_received',function(){
    console.log("data Received");
});


eventEmitter.emit('myEvent');

console.log("Program has ended");
