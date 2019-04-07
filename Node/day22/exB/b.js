var fs = require('fs');

const copy = (path) => {
    var readable = fs.createReadStream(__dirname + '/text.txt', {encoding: 'utf8', highWaterMark: 32*1024});

    var writeable = fs.createWriteStream(__dirname + path);

    readable.pipe(writeable);
}

copy('/../file.txt');