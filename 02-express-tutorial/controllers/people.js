const { people } = require("../data.js");


const addPerson = (req, res) => {
    people.push({ id: people.length + 1, name: req.body.name });
    res.end()
}

const getPeople = (req, res) => {
    res.json(people)
}

const idReturn = (req, res) => {
    const id = parseInt(req.params.id)
    const returned = people.find(returned => returned.id === id);
    if (!returned) {
        return res.status(404).json({ message: 'Not Found.' })
    }
    res.json(returned)
}

const idDelete = (req, res) => {
    const id = parseInt(req.params.id);

    const person = people.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    const updatedPeople = people.filter(p => p.id !== id);
    res.status(200).json({ success: true, data: updatedPeople });
}

const idPut = (req, res) => {
    const personIndex = people.findIndex(p => p.id === parseInt(req.params.id));

    if (personIndex === -1) {
        return res.status(404).json({ success: false });
    }

    people[personIndex].name = req.body.name;

    res.json({ success: true, data: people });

}

module.exports = { addPerson, getPeople, idReturn, idDelete, idPut }