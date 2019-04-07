const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/sum', urlencodedParser, function(req, res) {
    console.log(req.body.username)
    res.send('hihihiihhihi' + req.body.username)
})


app.listen(8080);