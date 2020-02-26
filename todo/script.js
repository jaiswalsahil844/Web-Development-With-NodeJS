window.onload = function () {

    let inp = document.getElementById('inp')
    let btn = document.getElementById('btn')
    let todo = document.getElementById('todo')

    function addNewTask () {
        let val = inp.value;   

        let item = document.createElement('li');
        // item.innerText = val;
        todo.appendChild(item);

        let span = document.createElement('span');
        span.innerText = val;
        item.appendChild(span);
        
        let btnup = document.createElement('button');
        btnup.innerText = 'Up';
        item.appendChild(btnup);

        let btndown = document.createElement('button');
        btndown.innerText = 'Down';
        item.appendChild(btndown);

        let strike = document.createElement('button');
        strike.innerText = 'Strike';
        item.appendChild(strike);

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