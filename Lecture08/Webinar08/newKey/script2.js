console.log(this);

function fun () {
    // console.log(this);
    console.log(global == this);
}

fun();