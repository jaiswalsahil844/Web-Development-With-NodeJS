const fs = require('fs');

function readFile(fileName) {

    return new Promise((resolve, reject) => {

        fs.readFile(fileName, (err, data) => {

            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

let x = readFile(__dirname + '/input1.txt')
console.log(x);

x.then((data) => {
    console.log(x);
    console.log(data);
})

x.catch((err) => {
    console.log(x);
    console.error(err);
})