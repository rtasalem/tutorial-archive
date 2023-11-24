const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)


// -----------------------
// Rana's version of the above code:

const http = require('http');
const { readFileSync } = require('fs')

// get all files
const homePage1 = readFileSync('./navbar-app/index.html');
const homeStyles1 = readFileSync('./navbar-app/styles.css');
const homeImage1 = readFileSync('./navbar-app/logo.svg');
const homeLogic1 = readFileSync('./navbar-app/browser-app.js');

/**
/**
/**
/**
 * Need to know about the incoming request to understand what it is that the user is trying to do on the client side of things.
 * Also need to know what response we must send back that correctly fulfills the request intiially sent. 
 * It's important to be very specific about what is sent back as a response after receiving a request.
 */
const server1 = http.createServer((req, res) => {
  // console.log('user hit the server')

  // console.log(req); // will retrieve the full request

  // console.log(req.method); // will identify the type of request being made e.g. GET, POST, PUT, DELETE

  // console.log(req.url); // reveals the url after the homepage i.e. anything written after the slash to show the resource the user is trying to access

  const url = req.url;
  console.log(url);

  // home page
  if (url === '/') {
    // note that the content type only needs to be specified when you are setting up the headers yourself, otherwise it is taken care of by Express.js
    res.writeHead(200, { 'content-type': 'text/html' }); // be very careful about you set up the content type, if 'text/plain' was written then o the browser you would see the html tags too
    res.write(homePage1); //with both this line and the above line, regardless of what is put after the / in the browser, 'home page' will still appear even after refreshing
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles1);
    res.end();
  }
  // logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage1);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic1);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});


server.listen(3000);

/**
 * res.writeHead(404, { 'content-type': 'text/html' }); 
 * using the above as an example, there are 3 parameters that can be passed as 
 * arguments for the writeHead: the status code, status message, and the headers.
 */
