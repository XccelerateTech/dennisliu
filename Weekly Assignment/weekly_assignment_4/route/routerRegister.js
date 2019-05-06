const express = require('express');
var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

module.exports = class RouterSignup {
    constructor(service) {
        this.service = service;
    }

    router() {
        let router = express.Router();
        router.post('/api/register', this.post.bind(this));
        // router.get('/message', this.get.bind(this));

        return router;
    }

    post(req, res) {
        console.log(req.body)
        return this.service.save(req.body.username, req.body.password)
        .then((data) => {
            console.log(data, 'register')
            res.send(`username ${data} registered`)
        })
        .catch((err) => {
            console.log('error')
            res.status(500)
            res.json(`username ${err} has been taken`)
        })
    }   

    // get(req,res) {
    //     console.log(req.user.name)
    //     client.get('name', function(err, data){
    //         if(err) {
    //             return console.log(err);
    //         }
    //         res.send(data)
    //         console.log('The value is ', data);
    //     }); 
    // }
}