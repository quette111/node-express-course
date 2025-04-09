const express = require("express");
const router = express.Router();
const { addPerson, getPeople, idReturn, idDelete, idPut } = require("../controllers/people.js");




router.get('/', getPeople)

router.get('/:id', idReturn)

router.put('/:id', idPut)

router.delete('/:id', idDelete)

router.post('/', addPerson)

module.exports = router 