var standard_input = process.stdin;

standard_input.setEncoding('utf-8');

var input = "";
standard_input.on('data', (data) =>{

    if(data == 'exit\n'){
        console.log(input);
        process.exit();
    }
    else{
        input += data;
    }
})

