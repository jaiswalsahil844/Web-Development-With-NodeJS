function helloSayer(times, name, doneSaying){

    let count = 0;
    let loopId = setInterval(() => {
        
        count++;
        console.log('Hello ' + name);
        if(count == times){
            clearInterval(loopId);
            doneSaying();
        }

    }, 1000)
}

helloSayer(3,'Sahil', () => {
    helloSayer(2,'Sumit', () => {
        helloSayer(3,'Deepak', () => {
            
        })
    })
})
