module.exports = function(app) {
    //user.
    app.route("/user").get((req, res) => {
        res.send("<h1>I am the registration page</h1>");
    });
    app.route("/user/register").post((req, res) => {
        console.log(req.body);
        console.log(req.headers);
        res.send("<h1>User Regisetred</h1>");
    });
    app.route("/user/login").post((req, res) => {
        res.send("<h1>User logged in</h1>");
    });
    // app.get("/", handleGet);
    // app.post("/", handlePost);
    // app.delete("/", handleDelete);
    // app.put("/", handlePut);


    // app.route("/book").get((req, res) => {
    //     res.send("<h1>I am from books</h1>")
    // });
    // app.route("/sales").get((req, res) => {
    //     res.send("<h1>I am from sales</h1>")
    // });

    // function handleGet(req, res) {
    //     res.send("<h1>Welcome to Expressjs Get</h1>");
    // }

    // function handlePost(req, res) {
    //     res.send("<h1>Welcome to Expressjs POST</h1>");
    // }

    // function handlePut(req, res) {
    //     res.send("<h1>Welcome to Expressjs PUT</h1>");
    // }

    // function handleDelete(req, res) {
    //     res.send("<h1>Welcome to Expressjs DELETE</h1>");
    // }
}