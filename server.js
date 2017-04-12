// this will give a ref to the express module.
const express = require("express");
//execute the express moudle and take the outcome 
//of express into the app
var app = express();

app.get("/", function(req, res) {
    res.send("<h1>Welcome to Expressjs</h1>");
});
app.post("/", (req, res) => {
    res.send("<h1>Welcome to Post page</h1>")
});
app.delete("/", function(req, res) {
    res.send("<h1>I am delted page</h1>")
});
app.put("/", (req, res) => {
    res.send("<h1>Put page</h1>")
})

//listening to the port 3000
app.listen(4000);