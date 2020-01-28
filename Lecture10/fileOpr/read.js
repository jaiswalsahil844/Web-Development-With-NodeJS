const fs = require('fs');

fs.readFile(__dirname + '/myText.txt',(err,data) => {
    if(err) throw err;
    // console.log(data); data in the form of buffer
    console.log(data.toString());
})
