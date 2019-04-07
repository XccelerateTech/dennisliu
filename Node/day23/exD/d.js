const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var jsonParser = bodyParser.json()

app.post('/sum', jsonParser, function (req, res) {

    console.log(req.body)

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    res.json('the sum of the array is: ' + req.body['arr'].reduce(reducer));
})

app.listen(8080);