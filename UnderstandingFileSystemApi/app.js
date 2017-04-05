var files = require("fs");
var data = files.readFileSync("./demo.txt");
console.log(data.toString());

files.readFile("./demo.txt1", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
console.log("Try to understand");