$(() => {

    let newtask = $('#newtask')
    let tasklist = $('#tasklist')

    $('#addtask').click(() => {
        // tasklist.append($('<li>').text(newtask.val()).css('color','red'))
        tasklist.prepend($('<li>').text(newtask.val()).css('color','red'))
        newtask.val('')

    })
})