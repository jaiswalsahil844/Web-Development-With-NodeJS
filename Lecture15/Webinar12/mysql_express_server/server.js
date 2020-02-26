const express = require('express')
const app = express()
// const db = require('./db')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

app.set('view engine', 'hbs')
// app.set('views', __dirname + '/views')

app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)
app.use('/',express.static(path.join(__dirname + '/public_static')))

/*
app.get('/', (req, res) => {

    db.getAllPersons()
        .then((persons) => {
            res.render('persons', {persons})
        })
        .catch((err) =>{
            res.render(err) 
        })  
    // res.render('persons', {
    //     persons: [ 
    //         {name: 'Abc', age: 23, city: 'Bhopal'},
    //         {name: 'Scd', age: 21, city: 'Delhi'}
    //     ]
    // })
})

app.get('/add', (req, res) => {
    
    res.render('persons_add')
    
})

app.post('/add', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })
})
*/

app.listen(5555, () => {
    console.log("Server started on http://localhost:5555")
})