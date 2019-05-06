const express = require('express');

module.exports = class ViewRouter{
    router(){
        const router = express.Router();

        router.get('/login',(req,res) => {
            res.render("login")
        });
        router.get('/message',(req,res) => {
            res.render("message")
        });
        router.get('/register', (req, res) => {
            res.render('register')
        })

        return router;
    }
}