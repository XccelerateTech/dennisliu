const play = require('./play');
const pathM = require('path');

const checkDir = (path) => {
    play.stats(path).then((folder) => {
        if (folder.isDirectory()) {
            console.log(path + ' is a directory.');
            checkFile(path);
        } else {
            console.log(path + ' is a file');
        }
    })    
}

const checkFile = (path) => {

    play.readdir(path).then((files) => {
        for (var file of files) { //var file in files, return number 0, 1, 2, 3, 4.....
            const filepath = pathM.join(path, file)
            checkDir(filepath)
        }
    })

}


checkDir('exA');