var express = require('express');
var redis = require('redis');
var app = express();



var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 123456
});

const getJob = () => {
    client.rpop('message', (err, data) => {
        if (err) {
            console.log(err);
            gettingJob();
            return
        };
        var job = JSON.parse(data);

        if (job == null) {
            console.log('no jobs');
            gettingJob();
            return;
        };

        console.log(job.msg, job.date, 'done, got the job!');
        gettingJob();
    });
};

const gettingJob = () => {
    setTimeout(getJob, 2000);
};

gettingJob()