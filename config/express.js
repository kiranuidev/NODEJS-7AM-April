const express = require("express");
module.exports = function() {
    var app = express();
    app.get("/", handleGet);
    app.post("/", handlePost);
    app.delete("/", handleDelete);
    app.put("/", handlePut);

    function handleGet(req, res) {
        res.send("<h1>Welcome to Expressjs Get</h1>");
    }

    function handlePost(req, res) {
        res.send("<h1>Welcome to Expressjs POST</h1>");
    }

    function handlePut(req, res) {
        res.send("<h1>Welcome to Expressjs PUT</h1>");
    }

    function handleDelete(req, res) {
        res.send("<h1>Welcome to Expressjs DELETE</h1>");
    }
    return app;
}