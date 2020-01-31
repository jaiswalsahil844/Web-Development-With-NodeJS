function fakeDownload (done) {
    setTimeout(function () {
        let downloadedData = "Some data we ripped of the interwebs";
        done(downloadedData);
    }, 1000)

}

fakeDownload(function (data) {
    console.log("We downloaded a file, which had this data --->");
    console.log(data);
})

