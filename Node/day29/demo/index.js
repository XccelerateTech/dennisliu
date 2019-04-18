const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const Users = [
    {
        username:'admin1',
        password: 'password1'
    },
    {
        username:'admin2',
        password: 'password2'
    }
]

let myAuthFunc = (username, password) => {
    return Users.some((user) => {
        return user.username == username && user.password == password
    })
}

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}));


app.get('/', (req, res) => {
    res.send('Hello, you have get to the application');
});


app.listen(8080, () => {
    console.log('listening to 8080');
});