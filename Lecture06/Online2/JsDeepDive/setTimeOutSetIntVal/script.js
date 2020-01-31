// function sayHello () {
//     console.log("hello !");
// }
// console.log("And the wait starts . . .");
// setTimeout(sayHello, 1000);

var intervalId;
var runCount = 0;
function sayHello () {
    runCount++;
    if(runCount > 5){
        clearInterval(intervalId);
    }
    console.log("Hello !");
}
console.log("And the wait starts . . .");
intervalId = setInterval(sayHello, 1000);

