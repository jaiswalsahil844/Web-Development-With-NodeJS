const fs = require('fs');

fs.writeFile(__dirname + '/myFile.txt','some data', function (err) {
    if(err) {
        throw err;
    }
    else {
        console.log("File was written");
    }
})