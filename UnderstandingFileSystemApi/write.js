//Synchronous.
var fs = require("fs");
var filePath = "./demo1.txt";
fs.writeFileSync(filePath, "Hey How r  u");
console.log("data looged to file");