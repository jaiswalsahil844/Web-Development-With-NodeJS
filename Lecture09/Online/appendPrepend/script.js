
$(() => {

    let item = $('#item');
    let list = $('#list');

    $('#prepend').click(() => {
        let text = item.val();
        // $('#list').prepend($(`<li>${text}</li>`));
        // $('#list').prepend($('<li>' + text + '</li>'));
        list.prepend($('<li>').text(text));
    })
    $('#append').click(() => {
        let text = item.val();
        list.append($('<li>').html(`<b>${text}</b>`));
    })
})