const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)

// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// localhost
// io.on('connection', (socket) => {
//     console.log('A user has connected to our server');

//     socket.on('disconnect', () => {
//         console.log('A user has left the server');
//     });

//     socket.on('chat', (msg) => {
//         if (msg == '') {
//             return;
//         };
//         console.log(`Message: ${msg}`)
//         io.emit('chat', msg);

//     })
// });

// localhost:3030/namespace1 and namspace2
// let one = io.of('/namespace1');
// one.max_connections = 3;
// one.current_connections = 0
// io.of('/namespace1').on('connection', (socket) => {

//     console.log('A user has connected to our server');

//     socket.on('disconnect', () => {
//         console.log('A user has left the server');
//     });

//     socket.on('chat', (msg) => {
//         if (msg == '') {
//             return;
//         };
//         console.log(`Message: ${msg}`)
//         io.of('/namespace1').emit('chat', msg);
//     })
// })


// user choose room
io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
    socket.on('sub', (room) => {
        chatroom = room
        socket.join(room);
        console.log(`user connected to room ${room}`);
    });

    socket.on('chat', (msg) => {
        console.log(`Message: ${msg}`);
        io.to(chatroom).emit('chat', msg)
    });
});


http.listen(5000, () => {
    console.log('connected to localhost:5000');
});