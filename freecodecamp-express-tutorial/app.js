// MIDDLEWARE

/** Middleware is everywhere in Express.js. Middleware executes during the request to the server. Some argue that Express apps are 
 * just made up of many middleware functions put together.
 */

const express = require('express');
const app = express();
const logger = require('./logger.js');

app.use('/api', logger);
// having '/api' specified above means that the url for the home and about pages WILL NOT appear in the console
// this is because specifying a path, this means logger will only be applied to any route after the '/api'
// removing the path will mean the logger is applied to any route

// req => middleware => res (middleware sits in the middle of the request and the response)

// when working with middleware, you must pass it onto the next middleware unless you're terminating the whole cycle by sending back a response

// below is the logger function, but still, it's better to have this in a separate file (see the logger.js file + line 9)
// const logger = (req, res, next) => { // must reference the logger in the middleware function (see line 19 as an example)
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     next();
// };

app.get('/', (req, res) => {
    // below is logging to the console the method, url, and time, but to do this for each method would be inefficient. see above for cleaner code.
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(4000, () => {
    console.log('Server is listening on port 4000...');
});