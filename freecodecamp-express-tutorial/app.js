// METHODS
const express = require('express');
const app = express();
// let { people } = require('./data');
const people = require('./routes/people');
const auth = require('./routes/auth');

// Static Assets
app.use(express.static('./methods-public'));

// Parse from data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

// POST - Insert NEW name into the array and display a message with that name, first method
// app.post('/login', (req, res) => {
//     const { name } = req.body;
//     if (name) {
//         return res.status(200).send(`Welcome ${name}`);
//     }
//     res.status(401).send('Please provide credentials');
// });

// LISTEN - specifying the port number on which the application is running and is 'listening' for HTTP requests
app.listen(4000, () => {
    console.log('Server is listening on port 4000...');
});