let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name' })
    }
    res.status(201).send({ success: true, person: name });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide name" });
    };
    res.status(201).send({ success: true, data: [...people, name] });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // console.log(id, name); // you will see this below in the console
    // res.send('Hello World'); // this will routerear as the response in Postman
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
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${req.params.id}` }); // Will routerear as the response in Postman
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople }); // will send back the array bar the person who has been deleted
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}