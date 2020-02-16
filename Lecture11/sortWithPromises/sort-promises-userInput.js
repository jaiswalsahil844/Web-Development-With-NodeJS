const readline = require('readline');
const fs = require('fs');
const os = require('os');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter array of num ', (answer) => {

    console.log(answer);
    
    var sorted = answer.split(' ').sort((a,b) => a - b).join(os.EOL);;

    fs.writeFile(__dirname + '/myText.txt', sorted, (err) => {
        if (err) throw err;
        console.log('successfully written');
    })
    rl.close();
});
