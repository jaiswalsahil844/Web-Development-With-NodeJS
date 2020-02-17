const express = require('express')
const app = express()

const fs = require('fs')

let todos = [
    // 'some tasks',
    // 'more tasks',
    // 'another sample task'
]

app.use('/', express.static(__dirname + '/public'))

app.get('/todos', (req, res) => {
    
    fs.readFile(__dirname + '/userInput.txt', (err,data) => {
        if (err) throw err;
        // console.log(data.toString());

        todos = [];
        var tasks = data.toString().split(',');

        for(let task of tasks){
            todos.push(task);
        }
    })

    res.send(todos)
})

app.get('/todos/add', (req, res) => {
    todos.push(req.query.task)
    fs.writeFile(__dirname + '/userInput.txt', todos , (err) => {
        if (err) throw err;
    })
    res.send(todos)
})

app.listen(3458, () => {
    console.log('started on http://localhost:3458')
})