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
        }, 2000)
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
        }, 2000) 
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
        }, 2000)
    })
}

// download('http://sahil.com/path/image.jpg')
//     .then((savedFile) => compress(savedFile,'zip'))
//     .then((archiev) => upload('ftp://sahil.com/path',archiev))
//     .catch((err) => console.error(err))

async function task() {

    try {
        const savedFile = await download('htp://sahil.com/path/image.jpg');
        const archiev = await compress(savedFile,'zip');
        await upload('ftp://sahil.com/path',archiev);
    }
    catch(err) {
        console.warn(err);
    }

}

console.log('task satrted');
task().then(() => console.log("task actuall ended"));
console.log('task ended');  // not actuall ended