const express = require('express');

const sev = express();

let todo = '<ul><li>Hii</li><li>Jii</li><li>Kii</li></ul>'; 
sev.get('/todos', (req, res, next) => {
    res.send(todo);
})


sev.get('/todos/:id', (req, res, next) => {
    res.send()
})

sev.listen(4567);