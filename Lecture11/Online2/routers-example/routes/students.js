const route = require('express').Router();

let students = [
    {name: 'Deepak', college: 'Jamia', year: 'I'},
    {name: 'Rahuk', college: 'IIIT', year: 'II'},
    {name: 'Anshu', college: 'NSIT', year: 'III'},
    {name: 'Sameer', college: 'IIT', year: 'IV'}
]

route.get('/', (req, res) => res.send(students));

route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(students);
})

route.get('/:id', (req, res, next) => {

    if(isNaN(parseInt(req.params.id))){
        next(); 
    }
    res.send(students[req.params.id]);
})
// route.get('/add', (req, res) => {
//     students.push({
//         name: req.query.name,
//         college: req.query.college,
//         year: req.query.year
//     })
//     res.send(students);
// })


module.exports = route;