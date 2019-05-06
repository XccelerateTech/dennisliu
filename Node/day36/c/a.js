var express = require('express');
var redis = require('redis');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: false}));


var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 123456
});

app.post('/', (req, res) => {
    client.lpush('message', JSON.stringify({msg:req.body.msg, date:req.body.date}) ,function(err) {
        if(err) {
            console.log(err);
            res.json(err);
            return;
        }
        console.log(req.body.msg, req.body.date)
        res.json('ok!');
    });
});


app.listen(3000, () => {
    console.log('running on 3000')
});
