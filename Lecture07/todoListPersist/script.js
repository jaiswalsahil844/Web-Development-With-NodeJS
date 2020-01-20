let tasklist = [];

window.onload = function () {

    function refreshList () {
        list.innerHTML = "";

        for(let task of tasklist){

            let item = document.createElement('li');
            item.innerText = task;
            list.appendChild(item);
        }
    }

    let inp = document.getElementById('inp');
    let btn = document.getElementById('btn');
    let list = document.getElementById('list');

    function addNewTask () {

        let val = inp.value;
        tasklist.push(val);
        refreshList();
        localStorage.tasks = tasklist.join(',');

        // let val = inp.value;   
        // let item = document.createElement('li');
        // item.innerText = val;
        // list.appendChild(item);
    }
    
    if(localStorage.tasks) {
        tasklist = localStorage.tasks.split(',');
    }
    refreshList();
    
    // btn.onclick = function () {
    //     addNewTask();
    // }
    btn.onclick = addNewTask;
    
    // ASCI value of Enter key = 13
    inp.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
            addNewTask();
        }
    });
}