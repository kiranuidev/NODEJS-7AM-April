const express = require("express");
const bodyParser = require("body-parser");
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.set('view engine', 'ejs')
    //configure routes in routes.js
    //call the routes.js file and pass express as parameter.
    app.get("/",function(req,res){
        res.send("hello");
    });
    
    var routes = require("../app/routes.js");
    routes(app);
    return app;
}