
$(() => {
    

    $('#loginForm').submit((e) => {
        // e.preventDefault();
        var name = $('#name').val();
        var room = $('#room').val();
        // $.post('/message', {name:name, room:room})
        // .then((data) => {
        //     console.log(data)
        // })
    })
    // console.log(name);
    // console.log(room);
    // $('#username').html(name);
    // $('#chatroom').html(room);
    var socket = io();

    $('#messageForm').submit(() => {
        
        // var name = $('#n').val();
        var text = $('#m').val();

        if (text == '') {
            return false;
        } 

        socket.emit('chat', `${name}: ${text}`);
       
        $('#m').val('');

        return false;
    })

    socket.on('chat', (msg) => {
        $('#messages').append($('<li>').text(msg));
    })
})

