$(() => {
    $('#signUp').on('click', (e) => {
        e.preventDefault();
        $('.status').remove();


        var username = $('#login_name_register').val();
        var password = $('#password_register').val()

        if ((username.length < 6) || (password.length < 6)) {
            $('#status').append('<p class="status" style="color: red">username and password must be at least 6 letters long.</p>')
        } else {
            $.post('/api/register', {
            username:username, 
            password: password
            })
            .then((response) => {
                console.log(response)
                $('#status').append(`<p class="status" style="color: red">${response}</p>`)
            })
            .catch((err) => {
                $('#status').append(`<p class="status" style="color: red">${err.responseJSON}</p>`)
            })
        }
        $('#login_name_register').val('');
        $('#password_register').val('')
    })

    // $('#submit').on('click', (e) => {
    //     $.get('/api/auth')
    //     .then((data) => {
    //         console.log(data)
    //     })
    // })
    
    let name;

    axios.get('/')
    .then((data) => {
        console.log(data)
        if (data.data.length  < 20){
            console.log(data.data)
            name = data.data;
            $('#hello').append(`<span>${name}</span>`)
            return;
        }
    })

    var socket = io();

    $('#messageForm').submit(() => {
    
        var text = $('#m').val();

        if (text == '') {
            return false;
        } 
        socket.emit('chat', `${name}: ${text}`);

        // socket.emit('chat', `${text}`);
       
        $('#m').val('');

        return false;
    })

    socket.on('chat', (msg) => {
        $('#messages').append($('<li>').text(msg));
    })
})