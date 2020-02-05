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

// series execution Sequentially
helloSayer(3,'Sahil')
    .then(() => {
        helloSayer(2,'Sumit')
            .then(() => {
                helloSayer(3,'Deepak')
            })
    })

// parallel execution Concurrent
// helloSayer(3,'Sahil')
//     .then(helloSayer(2,'Sumit'))
//     .then(helloSayer(3,'Deepak'))