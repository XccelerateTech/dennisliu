//require modules
const https = require('https');
const fs = require('fs');
const config = require('./knexfile').development;
const knex = require('knex')(config)
const {app} = require('./utils/init-app')();
const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
};

const server = https.createServer(options, app)
const io = require('socket.io').listen(server)

//route
const serviceRegister = require('./service/serviceRegister');
const routerRegister = require('./route/routerRegister');
const register = new routerRegister(new serviceRegister(knex))

app.use('/', register.router())

//socket.io
io.on('connection', (socket) => {
    console.log('A user has connected to our server');

    socket.on('disconnect', () => {
        console.log('A user has left the server');
    });

    socket.on('chat', (msg) => {
        if (msg == '') {
            return;
        };
        console.log(`Message: ${msg}`)
        io.emit('chat', msg);

    })
});

//server
server.listen(8000, () => {
    console.log('connected to 8000!');
});








//local passport
// app.use(session({
//     secret: 'thisRealSecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use('local-login', new LocalStrategy(
//     async (name, password, done) => {
//         console.log('in')
//         try{
//             console.log('pass')
//             let users = await knex('users').where({name:name});
//             console.log(users)
//             if(users.length == 0){
//                 console.log('1')
//                 return done(null, false, {message: 'No user exists'});
//             }
//             let user = users[0];
//             if(user.password === password){
//                 return done(null, user);
//             } else {
//                 console.log('2')
//                 return done(null, false, {message: 'Incorrect credentials'})
//             }
//         }catch(err){
//             console.log('fail')
//             return done(err);
//         }
//     }
// ));

// passport.use('facebook-login', new FacebookStrategy({
//     clientID: process.env.FACEBOOK_ID,
//     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     callbackURL: '/auth/facebook/callback'
// }, async (accessToken, refreshToken, profile, done)=>{
//         console.log(profile)

//         let userResult = await knex('users').where({ facebookID: profile.id});
//         if(userResult == 0 ){
//             let user = {
//                 facebookID: profile.id,
//                 name: profile.displayName,
//                 accessToken: accessToken
//             }
//             let query = await knex('users').insert(user).returning('id');
//             user.id = query[0];
//             done(null, user);
//         } else {
//             done(null, userResult[0])
//         }
//     }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     let users = await knex('users').where({ id: id});
//     if (users.length == 0) {
//         return done(new Error(`Wrong user id ${id}`));
//     }
//     let user = users[0];
//     return done(null, user);
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }

// app.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/',
//     failureRedirect: '/error'
// }));

// app.get('/', isLoggedIn, (req, res)=>{
//     res.send(`You've logged in well done! `+ req.user.name)
// });

// app.get('/error', (req, res)=>{
//     res.send('You have failed....')
// });
// // similar to our post method above. 
// app.get('/auth/facebook/callback', passport.authenticate('facebook-login',{
//     failureRedirect: '/error'
// }), (req, res)=> res.redirect('/'));

// //initial facebook request 
// app.get('/auth/facebook', passport.authenticate('facebook-login', {
//     scope: ['user_friends', 'manage_pages']
// }));
