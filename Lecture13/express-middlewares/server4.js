const express = require('express')
const app = express()

function decrypt(str) {
    
    var ans = "";
    for(let i=0; i<str.length; i++){

        var n =  str.charCodeAt(i) - 1;
        ans += String.fromCharCode(n);
    }
    return ans;
}

app.use((req, res, next) => {
    for (let q in req.query) {
        req.query[q] = decrypt(req.query[q])
    }
    next()
})

app.use((req, res, next) => {
    if (!req.query.name)  {
        req.query.name = 'Guest'
    }
    next()
})

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name)
})

app.get('/bye', (req, res) => {
    res.send('Goodbye ' + req.query.name)
})

app.listen(1234, () => {
    console.log('started')
})


