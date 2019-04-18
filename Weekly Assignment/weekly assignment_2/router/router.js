const express = require("express");

module.exports = class Router{
    constructor(service) {
        this.service = service;
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.put("/:id", this.put.bind(this));
        router.delete("/:id", this.delete.bind(this));
        return router;
    }

    get(req, res) {
        return this.service.read()
            .then((data) => {
                res.json(data[req.auth.user])
            })
            .catch(err => res.status(500).send(err));
    }

    post(req, res) {
        return this.service.read()
            .then((data) => {
                data[req.auth.user].push(req.body.note)
                console.log(req.body.note);
                return this.service.write(data)
            }).then((data) => {
                res.json(data[req.auth.user])
            })

        .catch(err => res.status(500).send(err));
    }

    put(req, res) {
        return this.service.read()
            .then((data) => {
                console.log(req.body.name);
                console.log(req.params.id);
                console.log(req.auth.user)
                data[req.auth.user][req.params.id] = req.body.name;
                return this.service.write(data);
            }).then((data) => {
                res.json(data[req.auth.user]);
            })
        .catch(err => res.status(500).send(err));
    };


    delete(req, res) {
        return this.service.read()
            .then((data) => {
                var arr = data[req.auth.user]

                console.log(arr);
                console.log(req.params.id);
                arr.splice(req.params.id, 1);
                console.log(arr);
                return this.service.write(data);
            }).then((data) => {
                console.log(data, "hi its me");
                res.json();
            })
        .catch(err => res.status(500).send(err));
    };
}