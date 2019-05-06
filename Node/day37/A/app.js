const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
var bodyParser = require('body-parser')

var exphbs  = require('express-handlebars');

app.use(express.static('public'))

//handlebars

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/',(req,res) => {
    res.render("login")
});
app.get('/message', (req, res) => {
    res.render('message')
})

//route
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/message', (req, res) => {
    console.log(req.body.name)
    var data = {name:req.body.name, room:req.body.room}
    res.json(data)
})


// localhost
io.on('connection', (socket) => {
    console.log('A user has connected to our server');

    socket.on('disconnect', () => {
        console.log('A user has left the server');
    });

    socket.on('chat', (msg) => {
        console.log(`Message: ${msg}`)
        io.emit('chat', msg);

    })
});

http.listen(5000, () => {
    console.log('connected to localhost:5000');
});