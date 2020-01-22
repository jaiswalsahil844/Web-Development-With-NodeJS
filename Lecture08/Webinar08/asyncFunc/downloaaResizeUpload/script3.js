function downloadFile (url, downloaded) {
    // We are downloading the file here
    // Lets's assume it takes 3 second to download
    // We use setTimeout to generate fake delay

    console.log("Downloading file " + url);

    setTimeout(function () {
        let filePath = "C:\\Downloads\\" + url.split("/").pop();
        console.log("File was downloaded to: " + filePath);
        downloaded(filePath);
    }, 3000);
}

function resizeFile(filePath, resized) {
    // We are resizing the file. It takes 3 seconds
    // We again use fake setTimeout delay

    console.log("We are resizing: " + filePath);
    setTimeout(function () {
        let newPath = filePath.split(".")[0] + "-resizied." + filePath.split(".")[1];
        resized(newPath);
    }, 3000);
}

function uplaodFile (diskPath, uploaded) {
    // We will upload this file, it takes 3 seconds
    // We will use another fake setTimeout delay login
    setTimeout(function () {
        let uploadedPath = "https://cb.lk/uploads/" + diskPath.split("\\").pop();
        console.log("we uploaded to: " + uploadedPath);
        uploaded(uploadedPath);
    }, 3000);

}
downloadFile("https://google.com/logo.one", function (downloadedPath) {
    resizeFile(downloadedPath, function (resizedPath) {
        uplaodFile(resizedPath,function (uploadedUrl) {
            console.log("Uploaded succesfully to: " + uploadedUrl);
        })
    });
});

