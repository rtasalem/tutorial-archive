const http = require('http'); // require is vanilla JS, whereas import is Node.js, both achieve the same thing

const server = http.createServer((req, res) => { // req = incoming request from client, res = response that is sent back
    // console.log(req); 
    if (req.url === '/') { // triple = will not perform type conversion like double = will i.e. triple = will check the variables have the same type and value
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you're looking for :(</p>
        <a href="/">back home</a>
        `);
    }
    // the above code is not the same as what was done in the YouTube tutorial, I think this is because the if statements were set up using an older version of node that does not work with the version i am using.
});

server.listen(4000); // originally the port 5000 was used but after looking online it seems that Apple is using this port for 'AirPlay'