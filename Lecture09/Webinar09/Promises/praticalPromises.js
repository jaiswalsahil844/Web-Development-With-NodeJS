function download (url) {
    
    return new Promise(function (resolve, reject) {

        if(!url.startsWith("http")) {
            reject(new Error("Url does not start with http"));
        }
        else {
            console.log("Start download: " + url);
            setTimeout( function () {  // fake 3 sec download task
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 3000)

        }
    }) 
}

function resize (fileName) {

    return new Promise (function(resolve, reject) {
        
        if(!fileName.endsWith(".png")) {
            reject(new Error("file is not png"));
        }
        else {
            console.log("Start resize: " + fileName);
            setTimeout(function () {  // fake 3 sec resize task
                // change x.png -> x-resized.png
                let resizedFile = fileName.split('.')[0] + "-resized.png";
                resolve(resizedFile); 
            }, 3000)
        }
    })
}

function upload (resizedFile) {
    
    return new Promise( function(resolve, reject) {
        console.log("Start upload: " + resizedFile);
        setTimeout(function () {
            let uploadedUrl = "http://imgur.com/" + resizedFile;
            resolve(uploadedUrl);
        }, 3000)
    })
}

download('http://cb.lk/logo.png')
    .then(function (fileName) {
        console.log("Download file is at: " + fileName);
        resize(fileName)
            .then(function (resizedFile) {
                console.log("Resized file is at: " + resizedFile);
                upload(resizedFile)
                    .then(function (uploadedUrl) {
                        console.log("Uploaded file is at: " + uploadedUrl);
                    })
            })
            .catch(function(err) {
                console.error(err);
            })
        
    })
    .catch(function(err) {
        console.error(err);
    })

// download('http:/cb.lk/logo.png')
//     .then(resize)
//     .then(upload)
//     .then(function (uploadedUrl) {
//         console.log("File was uploaded to: " + uploadedUrl);
//     })
//     .catch( function(err) {
//         console.error(err);
//     })