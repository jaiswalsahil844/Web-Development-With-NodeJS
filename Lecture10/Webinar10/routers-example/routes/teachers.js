const express = require('express');

const Router = express.Router;
const route = Router();

// const route = require('express').Router();

let teachers = [
    {name: 'Sahil', subject: 'Web Dev'},
    {name: 'Sumit', subject: 'App Dev'}
]

route.get('/', (req, res) => res.send(teachers));
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers);
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]));

module.exports = route;