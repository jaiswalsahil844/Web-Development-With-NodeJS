function greeterGentrator (greeting) {
    function createGenrator(name) {
        function greet () {
            console.log(greeting + name);
        }
        return greet;
    }
    return createGenrator;
}

let helloGreeter = greeterGentrator('Hello ');
let welcomeGreeter = greeterGentrator('Welcome ');

let greet1 = helloGreeter('Sahil');
let greet2 = helloGreeter('Sumit');
let greet3 = welcomeGreeter('Sahil');
let greet4 = welcomeGreeter('Sumit');
