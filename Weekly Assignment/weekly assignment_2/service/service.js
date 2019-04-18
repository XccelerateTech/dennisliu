const jsonfile = require('jsonfile');
// const path = require('path');

module.exports = class Service {
    constructor(filename) {
        this.filename = filename;
        this.save;
    }

    write(data){
        return new Promise((resolve, reject) => {
            jsonfile.writeFile(this.filename, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                };
            });
        });
    };
  

    read(){
        return new Promise((resolve, reject) => {
            
            jsonfile.readFile(this.filename, (err, data) => {
                if (err) {
                    console.log(err)
                    reject(err); 
                } else {
                    this.save = data;
                    // console.log(this.save);
                    resolve(this.save);
                };
            });
        });
    };


    update() {

    }

    delete() {

    }



}