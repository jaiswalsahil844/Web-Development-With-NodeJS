function downloadFile (url, downloaded) {
    // We are downloading the file here
    // Lets's assume it takes 3 second to download
    // We use setTimeout to generate fake delay

    console.log("Downloading file " + url);

    setTimeout(function () {
        let filePath = "C:\\Windows\\downloads\\xyz.txt";
        console.log("File was downloaded to: " + filePath);
        downloaded(filePath);
    }, 3000);
};

function resizeFile(filePath, resized) {
    // We are resizing the file. It takes 2 seconds
    // We again use fake setTimeout delay

    console.log("We are resizing: " + filePath);
    setTimeout(function () {
        let newPath = filePath.split(".")[0] + "-resizied." + filePath.split(".")[1];
        resized(newPath);
    }, 2000);
};


// downloadFile("https://google.com/logo.one", function (path) {
//     console.log("we got the file at: " + path);
// })

resizeFile("C:\\User\\Sahil\\photo.jpg", function (path) {
    console.log("Resized file is at: " + path);
});