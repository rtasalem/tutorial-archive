const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

// -------------------

// Rana's code
const express = require('express');
const path = require('path');

const app1 = express();

// set up static and middleware
app1.use(express.static('./public'));
// after adding the index.html to the public folder, it is now a root. 
// this means that whenever a user hits the server, by default the server will serve the index.html


/** static is the word used to describe an asset which the server does not need to change. All assets can just be placed 
 * in a folder that is typically named either static or public. The benefit of express is that it will set up the status codes, 
 * the mime types and the path, none of this has to be manually configured. Examples of static files include image files, 
 * stylesheets and javascript files. */

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// Another two methods other than sendFile is adding to static assets (less and cleaner code compared to above)
// SSR = service side rendering
// Also note that while sendFile is used throughout the tutorial, it is not used to send index.html

app1.all('*', (req, res) => {
  res.status(404).send('Resource not found.');
});

app1.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
