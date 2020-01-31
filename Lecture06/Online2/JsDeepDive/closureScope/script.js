function count () {
    var initial = 1;
    function plus () {
        console.log(++initial);
    }
    return plus;
}

var c = count();
c();
c(); 

function createCounter (intVal, deltaVal) {
    
    return {
        up () {
            intVal += deltaVal;
            console.log(intVal);
        },
        down () {
            intVal -= deltaVal;
            console.log(intVal);
        }
    }
}
var d = createCounter(10,2);
d.up();
d.up();
d.down();