let obj = {
    aNumber: 1234,
    aString: "sahil",
    aFunction: function () {
        console.log(this.aNumber + this.aString);
    }
};

obj.aFunction();