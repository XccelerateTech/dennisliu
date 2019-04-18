const basicAuth = require('express-basic-auth');
const Users = require("../stores/auth.json");

let myAuthFunc = (username, password) => {
    return Users["login"].some((user) => {
        return user.username == username && user.password == password;
    });
};

module.exports = (app) => {
    app.use(basicAuth({
        authorizer: myAuthFunc,
        challenge: true
    })); 
};

