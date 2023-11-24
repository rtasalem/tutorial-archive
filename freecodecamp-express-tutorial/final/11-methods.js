const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// -------------------

// Rana's code

// METHODS
const express = require('express');
const app1 = express();
let { people } = require('./data');

// Static Assets
app1.use(express.static('./methods-public'));

// Parse from data
app1.use(express.urlencoded({ extended: false }));

// Parse JSON
app1.use(express.json());

// GET - Seeing ALL people in the array
app1.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST - Insert NEW name into the array and display a message with that name, first method
app1.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please provide credentials');
});

// POST - Insert new name into the array and show the request was successful via Postman alongiside the name given, second method
app1.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name' })
  }
  res.status(201).send({ success: true, person: name });
});

// POST - Insert new name into the array and show the request was successful and also return the full array with the new added name
app1.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide name" });
  };
  res.status(201).send({ success: true, data: [...people, name] });
});

// PUT - updating data that already exists in the array
app1.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name); // you will see this below in the console
  // res.send('Hello World'); // this will appear as the response in Postman
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    };
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// DELETE - remove a name from the array and return that array excluding the name that has been deleted
app1.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` }); // Will appear as the response in Postman
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newPeople }); // will send back the array bar the person who has been deleted
});

// LISTEN - specifying the port number on which the application is running and is 'listening' for HTTP requests
app1.listen(4000, () => {
  console.log('Server is listening on port 4000...');
});