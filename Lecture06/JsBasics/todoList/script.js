window.onload = function () {

    let inp = document.getElementById('inp')
    let btn = document.getElementById('btn')
    let todo = document.getElementById('todo')

    function addNewTask () {
        let val = inp.value;   

        let item = document.createElement('li');
        item.innerText = val;
        todo.appendChild(item);

    }
    
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