// const readline = require('readline');
// const fs = require('fs');
// const os = require('os');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter array of num ', (answer) => {

//     console.log(answer);
    
//     var sorted = answer.split(' ').sort((a,b) => a - b).join(os.EOL);

//     fs.writeFile(__dirname + '/myText.txt', sorted, (err) => {
//         if (err) throw err;
//         console.log('successfully written');
//     })
//     rl.close();
// });

var standard_input = process.stdin;

const fs = require('fs');
const os = require('os');

standard_input.setEncoding('utf-8');

var input = "";
standard_input.on('data', (data) =>{

    if(data == 'exit\n'){
        process.exit();
    }      
    else{
        input += data;
        var sorted = input.split(os.EOL).sort((a,b) => a - b).join(os.EOL);
        fs.writeFile(__dirname + '/userInput.txt', sorted , (err) => {
            if (err) throw err;
        })        
    }
})

