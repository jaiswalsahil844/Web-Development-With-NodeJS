const fs = require('fs');
const os = require('os');
// os.EOL

let arr = [];
let val;

fs.readFile(__dirname + '/input1.txt',(err,data) => {
    if(err) throw err;
    val = data.toString();
    arr = arr.concat(val.split(os.EOL));
    
    fs.readFile(__dirname + '/input2.txt',(err,data) => {
        if(err) throw err;
        val = data.toString();
        arr = arr.concat(val.split(os.EOL));

        fs.readFile(__dirname + '/input3.txt',(err,data) => {
            if(err) throw err;
            val = data.toString();
            arr = arr.concat(val.split(os.EOL));
            arr.sort((a,b) => a - b);

            fs.writeFile(__dirname + '/output.txt',arr.join(os.EOL), (err) => {
                if(err) throw err;
                console.log('Done');
            })
        })
    })    
})









