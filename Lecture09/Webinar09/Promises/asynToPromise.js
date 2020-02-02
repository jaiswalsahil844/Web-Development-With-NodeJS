function someAsynTask (callback) {
    console.log("Beginning of task");
    setTimeout(function () {
        console.log("End of task");
        callback();
    }, 3000)
}

// someAsynTask(function () {
//     console.log("We did some task");
// })

let someTaskPromise = function () {

    return new Promise(function (resolve, reject){
        someAsynTask(resolve);
    })
}

someTaskPromise()
    .then(function () {
        console.log("After task is completed");
    })

