const fs = require('fs');

let content = "This is a new content here";

console.log('Before write');

fs.writeFile(__dirname + '/myText.txt',content, (err) => {
    if(err) throw err;
    console.log('successfully written');
})

console.log('after writing');