$(() => {

    let newtodo = $('#newtodo');
    let addtodo = $('#addtodo');
    let todolist = $('#todolist');

    addtodo.click(() => {
        let newtodoVal = newtodo.val();
        
        $.post('/todos/', {task: newtodoVal}, (data) => {
            
            todolist.empty();
            for(todo of data) {
                todolist.append('<li>' + todo.task + '</li>');
            }
        })
    })
})
