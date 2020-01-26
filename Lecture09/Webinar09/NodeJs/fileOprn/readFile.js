const fs = require('fs');

fs.readFile(__dirname + '/myFile.txt', function (err , data) {
    if(err) {
        throw err;
    }
    else {
        console.log(data);  // binary data
        console.log(data.toString());  // actual data
    }
} )