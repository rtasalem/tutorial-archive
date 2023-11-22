const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(4000, () => {
    console.log('Server listening on port : 4000...');
}); // asynchronous

// again, here the listen method is asynchronous, so once the app is running, listen tells the event loop to keep listening for the 
// request events and will only stop the process when killed with ctrl + c