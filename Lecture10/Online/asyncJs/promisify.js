const util = require('util');

function download(url, downloaded) {
    console.log(`Downloading from ${url}`);
    if(!url.startsWith('http')) {
        downloaded(new Error("URL must start with http"));
        return;
    }
    setTimeout(function() {
        let savedFile = url.split('/').pop();
        console.log(`Download and save as ${savedFile}`);
        downloaded(null,savedFile);
    }, 2000)
}

function compress(filePath, format, compressed) {
    console.log(`Compressing ${filePath}`);
    if(['zip','gzip','7z'].indexOf(format) === -1){
        compressed(new Error('We only support zip, gzip, 7z'));
        return;
    }
    setTimeout(() => {
        let archiev = filePath.split('.')[0] + '.' + format;
        console.log(`Compressed and save as ${archiev}`);
        compressed(null,archiev);
    }, 2000)
}

function upload(server, file, uploaded) { 
    console.log(`Uploading ${file} to ${server}`);
    if(!server.startsWith('ftp')) {
        uploaded(new Error("We can only upload to ftp servers"));
        return;
    }
    setTimeout(function() {
        let remotePath = server + '/' + file;
        console.log(`Uploded to ${remotePath}`);
        uploaded(null,remotePath);
    }, 2000)
}

const downloadPromise = util.promisify(download);
const compressPromise = util.promisify(compress);
const uploadPromise = util.promisify(upload);

downloadPromise('http://sahil.com/path/image.jpg')
    .then((savedFile) => compressPromise(savedFile,'zip'))
    .then((archiev) => uploadPromise('ftp://sahil.com/path',archiev))
    .catch((err) => console.error(err))