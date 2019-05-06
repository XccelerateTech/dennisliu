const basicAuth = require('express-basic-auth');
const knexconfig = require("../knexfile").development;
const knex = require('knex')(knexconfig);


// let myAuthFunc = (username, password) => {
//     return Users["login"].some((user) => {
//         return user.username == username && user.password == password;
//     });
// };

let myAuthFunc = (knex) => {
    return (username, password, cb) => {
        let query = knex.select('username')
            .from('users')
            .where('username', username)
            .where('password', password)
        query.then((rows) => {
            // console.log(rows)
            if (rows.length == 1){
                return cb(null, true)
            }  else {
                return cb(null, false)
            }
        }).catch((error) => {
            console.log(error);
        })
    }
}


module.exports = (app) => {
    app.use(basicAuth({
        authorizer: myAuthFunc(knex),
        authorizeAsync: true,
        challenge: true
    })); 
};

