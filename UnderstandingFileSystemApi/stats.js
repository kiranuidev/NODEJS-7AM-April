var fs = require("fs");
var filePath = "./demo1.txt";
var result = fs.statSync(filePath);
console.log(result);