const express = require("express");
const bodyParser = require("body-parser");
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //configure routes in routes.js
    //call the routes.js file and pass express as parameter.
    var routes = require("../app/routes.js");
    routes(app);
    return app;
}