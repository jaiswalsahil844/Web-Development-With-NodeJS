function helloSayer(times, name){

    return new Promise((resolve, reject) => {

        let count = 0;
        let loopId = setInterval(() => {
        
            count++;
            console.log('Hello ' + name);
            if(count == times){
                clearInterval(loopId);
                resolve();
            }

        }, 1000)
    })
}

async function task() {
    
    await helloSayer(3,'Sahil');
    await helloSayer(2,'Sumit');
    await helloSayer(3,'Deepak');
}

task();