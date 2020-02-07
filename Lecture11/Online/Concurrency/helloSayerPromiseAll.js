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
    
    await Promise.all([
        await helloSayer(4,'Sahil'),
        await helloSayer(3,'Sumit'),
        await helloSayer(2,'Deepak')
    ])

    console.log('--------first batch over-------');

    await Promise.all([
        helloSayer(2,'Anshu'),
        helloSayer(3,'Sammer'),
        helloSayer(4,'Aakash')
    ])
}

task();