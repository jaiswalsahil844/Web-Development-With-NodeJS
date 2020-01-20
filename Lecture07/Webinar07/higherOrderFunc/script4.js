function createGreeter (name) {
    let firstName = name.split(" ")[0];
    function greeter () {
        console.log("Hello " + firstName);
    }
    return greeter;
}

let johngreeter = createGreeter("John Ooe");
let harrygreeter = createGreeter("Harry Potter");

johngreeter();
harrygreeter();