const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const upload = require('express-fileupload');

const app = express();
app.use(upload());

const currentFolder = __dirname + path.sep + 'files';

const writefile = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(currentFolder + path.sep + name, data, (err, name) => {
            if (err) {
                reject(err);
            };
            resolve(name);
        });
    });
};

const readfile = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile(currentFolder + path.sep + name, (err, data) => {
            if (err) {
                reject(err);
            };
            resolve(data);
        });
    });
};

var cashes = {};

app.post('/files', (req, res) => {
    var name = req.files.filename.name;
    var data = req.files.filename.data;
    cashes[name] = writefile(name, data);
    cashes[name].then((name) => res.send(`${name} is uploaded`))
        .catch((e) => res.status(500).send(e.massage))
})

app.get('/files/:name', (req, res) => {
    readfile(req.params.name).then((body) => res.send(body))
    .catch((e) => res.status(500).send(e.massage));
})

app.use(express.static('files'));
app.listen(8080);