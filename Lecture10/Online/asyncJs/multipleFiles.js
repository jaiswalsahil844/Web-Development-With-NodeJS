function download(url) {

    return new Promise((resolve, reject) => {
        console.log(`Downloading from ${url}`);
        if(!url.startsWith('http')) {
            reject(new Error("URL must start with http"));
            return;
        }
        setTimeout(function() {
            let savedFile = url.split('/').pop();
            console.log(`Download and save as ${savedFile}`);
            resolve(savedFile);
        }, 1000)
    })
    
}

function compress(filePath, format) {

    return new Promise((resolve, reject) => {
        console.log(`Compressing ${filePath}`);
        if(['zip','gzip','7z'].indexOf(format) === -1){
            reject(new Error('We only support zip, gzip, 7z'));
            return;
        }
        setTimeout(() => {
            let archiev = filePath.split('.')[0] + '.' + format;
            console.log(`Compressed and save as ${archiev}`);
            resolve(archiev);
        }, 1000) 
    })

}

function upload(server, file) { 

    return new Promise((resolve, reject) => {
        console.log(`Uploading ${file} to ${server}`);
        if(!server.startsWith('ftp')) {
            reject(new Error("We can only upload to ftp servers"));
            return;
        }
        setTimeout(function() {
            let remotePath = server + '/' + file;
            console.log(`Uploded to ${remotePath}`);
            resolve(remotePath);
        }, 1000)
    })
}
//  asyn - await hell
// async function task() {
        
//         let start = new Date().getTime();

//         const savedFile1 = await download('http://sahil.com/path/image1.jpg');
//         const savedFile2 = await download('http://sahil.com/path/image2.jpg');
//         const savedFile3 = await download('http://sahil.com/path/image3.jpg');
        
//         const archiev1 = await compress(savedFile1,'zip');
//         const archiev2 = await compress(savedFile2,'zip');
//         const archiev3 = await compress(savedFile3,'zip');

//         await upload('ftp://sahil.com/path',archiev1);
//         await upload('ftp://sahil.com/path',archiev2);
//         await upload('ftp://sahil.com/path',archiev3);

//         let end = new Date().getTime();
//         console.log((end - start)/1000);

// }

async function task1() {
    const savedFile1 = await download('http://sahil.com/path/image1.jpg');
    const archiev1 = await compress(savedFile1,'zip');
    await upload('ftp://sahil.com/path',archiev1);
}

async function task2() {
    const savedFile2 = await download('http://sahil.com/path/image2.jpg');
    const archiev2 = await compress(savedFile2,'zip');
    await upload('ftp://sahil.com/path',archiev2);
}

async function task3() {
    const savedFile3 = await download('http://sahil.com/path/image3.jpg');
    const archiev3 = await compress(savedFile3,'zip');
    await upload('ftp://sahil.com/path',archiev3);
}

// series
// async function task() {
    
//     let start = new Date().getTime();

//     await task1();
//     await task2();
//     await task3();
    
//     let end = new Date().getTime();
//     console.log((end - start)/1000);
// }

// parallel
async function task(){

    let start = new Date().getTime();

    const completed1 = task1();
    const completed2 = task2();
    const completed3 = task3();

    await completed1;
    await completed2;
    await completed3;
    
    let end = new Date().getTime();
    console.log((end - start)/1000);
}

task();

// Promise.all([
//     task1(),
//     task2(),
//     task3()
// ]).then(() => console.log("All the tasks are done"))
