const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const viewRouter = require('../viewRouter');
const {passport} = require('./passport')();
const session = require('express-session')

var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('yes')
        return next();
    }
    res.redirect('/login');
}

module.exports = () => {
    let app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    //handlebars
    app.engine('handlebars', exphbs({defaultLayout: 'index'}));
    app.set('view engine', 'handlebars');
    app.use('/', new viewRouter().router())
    app.use(express.static("public"));

    //session
    app.use(session({
        secret: 'thisRealSecret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));

    //passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/message',
        failureRedirect: '/error'
    }));
    
    app.get('/', isLoggedIn, (req, res)=>{
        client.get(req.user.name, function(err, data){
            if(err) {
                return console.log(err);
            }
            res.send(data)
            console.log('The name is ', data);
        }); 
        // console.log(req.user.name)
        // res.send(req.user.name)
    });
    
    app.get('/error', (req, res)=>{
        res.send('You have failed....')
    });
    // similar to our post method above. 
    app.get('/auth/facebook/callback', passport.authenticate('facebook-login',{
        failureRedirect: '/error'
    }), (req, res)=> res.redirect('/message'));
    
    //initial facebook request 
    app.get('/auth/facebook', passport.authenticate('facebook-login', {
        scope: ['user_friends', 'manage_pages']
    }));

    return {
        app: app
    }
}