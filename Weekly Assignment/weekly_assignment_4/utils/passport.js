
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();
const config = require('../knexfile').development;
const knex = require('knex')(config)
var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

module.exports = () => {

    passport.use('facebook-login', new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback'
    }, async (accessToken, refreshToken, profile, done)=>{
            console.log(profile.displayName)
    
            client.on('error', function(err){
                console.log(err);
            });
            
            client.set(profile.displayName, profile.displayName, function(err, data) {
                if(err) {
                    return console.log(err);
                }
            });  

            let userResult = await knex('users').where({ facebookID: profile.id});
            if(userResult == 0 ){
                let user = {
                    facebookID: profile.id,
                    name: profile.displayName,
                    accessToken: accessToken
                }
                let query = await knex('users').insert(user).returning('id');
                user.id = query[0];
                done(null, user);
            } else {
                done(null, userResult[0])
            }
        }
    ));

    passport.use('local-login', new LocalStrategy(
        async (username, password, done) => {
            try{
                let users = await knex('users').where({name:username});
                if(users.length == 0){
                    return done(null, false, {message: 'No user exists'});
                }
                let user = users[0];
                if(user.password === password){
                    console.log(user.name)
                    client.on('error', function(err){
                        console.log(err);
                    });
                    
                    client.set(user.name, user.name, function(err, data) {
                        if(err) {
                            return console.log(err);
                        }
                    });                    
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Incorrect credentials'})
                }
            }catch(err){
                console.log('fail')
                return done(err);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser(async (id, done) => {
        let users = await knex('users').where({ id: id});
        if (users.length == 0) {
            return done(new Error(`Wrong user id ${id}`));
        }
        let user = users[0];
        return done(null, user);
    });

    return {
        passport: passport
    }
        


}