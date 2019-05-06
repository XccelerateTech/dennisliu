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
        return this.service.list(req.auth.user)
        .then((data) => {
            res.json(data);
        })
        .catch(err => res.status(500).send(err));
    }

    post(req, res) {
        return this.service.add(req.auth.user, req.body.note)
        .then(() => {
            return this.service.list(req.auth.user)
        })
        .then((data) => {
            console.log(data, 'post');
            res.json(data)
        })
        .catch(err => res.status(500).send(err));
    }

    put(req, res) {
        console.log(req.body.note)
        console.log(req.params.id)

        return this.service.change(req.params.id, req.body.note)
        .then(() => {
            return this.service.list(req.auth.user)
        })
        .then((data) => {
            console.log(data, 'put');
            res.json(data)
        })
        .catch(err => res.status(500).send(err));
    }

    delete(req, res) {
        console.log(req.params.id);
        return this.service.delete(req.params.id)
        .then(() => {
            return this.service.list(req.auth.user)
        })
        .then((data) => {
            console.log(data, 'delete');
            res.json(data)
        })
        .catch(err => res.status(500).send(err));
    };
}