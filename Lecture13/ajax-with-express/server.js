const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Word');
})

app.use('/abc', express.static(__dirname + '/public'))

app.listen(5555, () => (
    console.log('Server Started')
))