window.onload = function () {

    let newtask = document.getElementById('newtask');
    let addtask = document.getElementById('addtask');
    let todolist = document.getElementById('todolist');

    addtask.onclick = function () {

        // todolist.innerHTML += `<li> ${newtask.value} </li>`;

        let li = document.createElement('li');
        // li.innerText = newtask.value;
        
        // add the X button  
        let xBtn = document.createElement('button');
        xBtn.innerText = 'x';
        xBtn.onclick = function (event) {
            event.target.parentElement.remove();
        }
        
        // add the up button
        let upBtn = document.createElement('button');
        upBtn.innerText = 'up';
        upBtn.onclick = function (event) {
            // event.target = the up button
            // event.target.parentElement = the <li> item
            // event.target.parentElement.parnetElement is the todolist

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,  // insert this element
                event.target.parentElement.previousElementSibling  // before it's previous element 
            )
        } 

        // add the down button
        let doBtn = document.createElement('button');
        doBtn.innerText = 'down';
        doBtn.onclick = function (event) {
            // event.target = the up button
            // event.target.parentElement = the <li> item
            // event.target.parentElement.parnetElement is the todolist

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,  // insert next element
                event.target.parentElement  // before current element 
            )
        } 

        // add the task text
        let taskSpan = document.createElement('span');
        taskSpan.innerText = newtask.value;
        
        li.appendChild(xBtn);
        li.appendChild(upBtn);
        li.appendChild(doBtn);
        li.appendChild(taskSpan);
        todolist.appendChild(li);


    }
}