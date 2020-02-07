function helloSayer(times, name){

    let count = 0;
    let loopId = setInterval(() => {
        
        count++;
        console.log('Hello ' + name);
        if(count == times){
            clearInterval(loopId);
        }

    }, 1000)
}

helloSayer(3,'Sahil');
helloSayer(2,'Sumit');