// EVENTS 
/**
 * The flow of the program is in part determined by the events that occur when the program is executed. Used heavily in Node.js.
 */

// ----------------------------------------

// class:
const EventEmitter = require('events'); // common practice to name it EventEmitter

// object of the EventEmitter class called customEmitter:
const customEmitter = new EventEmitter();

// also passing in the callback function '() => {}'
customEmitter.on('response', (name, id) => { // the callback function is used to access the arguments in line 23 as parameters
    console.log(`data recieved user ${name} with id: ${id}`);
});

// even though the arguments are not passed as parameters below in line 20 does not mean the program will break
customEmitter.on('response', () => {
    console.log('some other logic here ');
});

customEmitter.emit('response', 'john', 34); // must match what is written in line 15 i.e. 'response'
// the 'john' and 34 are arguments that can be passed when emitting the event, so long as those paramters are stated in line 15

/**
 * the order is important, if the emitted response (line 15) was moved to the top, you would not see the 'data received' or the 'some
 * other logic here'. */

// ----------------------------------------

const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    // 'request' must be specifically written as this will be recognised by the API and enables the server to listen for request events
    res.end('Welcome');
});

server.listen(4000);

/**
 * Rather than passing the callback function as shown in the previous example (lines 3-5), the Event Emitter API can be used 
 * which has the on method (line 11) */
