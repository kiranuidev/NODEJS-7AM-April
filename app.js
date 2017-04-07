const http = require("http");
const config = require("./config");
var server = http.createServer(function(req, res) {
    process.env.environment = "development";
    console.log(process.env);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url == "/") {
        res.end("<h1>Welcome to the the node Server</h1>");
    } else if (req.url == "/login") {
        res.end("<h1>Welcome to login page</h1>")
    } else {
        res.end("<h1>I am not aware of this route");
    }
});

server.listen(config.port);
server.on('connection', function() {
    console.log("server running on port:" + config.port);
})