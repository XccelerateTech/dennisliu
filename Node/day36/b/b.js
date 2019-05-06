const express = require('express');
var async = require("async");
var axios = require('axios');
var redis = require('redis');
const app = express();

var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function(err){
    console.log(err);
});

var q = async.queue(function (txIndex, callback) {
    console.log(txIndex, 'run!')
    axios.get('https://blockchain.info/rawtx/' + txIndex)
        .then((res) => {
            // console.log(res.data)
            client.setex(txIndex, 60 * 10, JSON.stringify(res.data), (err) => {
                if (err) {
                    console.log(err)
                }
                callback();
            })
        })   
}, 2000);

const redisfunction = () => {
    axios.get('https://blockchain.info/latestblock')
    .then((res) => {
        // console.log(res.data);
        client.setex('latestBlock', 60 * 10, JSON.stringify(res.data), (err, data) => {
            if (err) {
                return console.log(err)
            }
        })

        res.data.txIndexes.forEach((txIndex) => {
            // console.log(JSON.stringify(id))
            client.get(txIndex, (err, data) => {
                if(err) {
                    console.log(err);
                };
                if (data === null) {
                    q.push(txIndex)
                } else {
                    client.expire(txIndex, 60, (err) => {
                        if (err) {
                            console.log(err);
                        };
                    });
                };
            });
        });
    });
};


redisfunction();


app.get('/', function (req, res) {
    client.get('latestBlock', (err, data) => {
        if(err) {
            return console.log(err);
        }
        var block = JSON.parse(data)
        Promise.all(
            block.txIndexes.map((txIndex) => {
                return new Promise((resolve, reject) => {
                    client.get(txIndex, (err, data) => {
                        if (err) {
                            return console.log(err);
                        };
                        var index = JSON.parse(data);
                        if (index == null) {
                            return reject('getting data...');
                        } else {
                            resolve(index);
                        }; 
                    })  
                })
                .then((hash) => {
                    block.txhash = hash;
                    res.json(block);
                })
                .catch((err) => {
                    res.status(400).send(err);
                });
            })
        )
    })
  });
  
app.listen(3000, () => {
    console.log('running on 3000')
});

