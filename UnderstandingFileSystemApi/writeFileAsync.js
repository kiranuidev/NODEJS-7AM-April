var fs = require("fs");
var path = "./demo2.txt";
// fs.writeFile(path, "I am good", function(err) {
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("Data written to file");
//     }
// })

fs.appendFile(path, "I am new Data", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data written successfully");
    }
});

// fs.readFile("./demo.txt", function(err, data)
console.log(new Date())
readFile("./demo.txt", (err, data) => {
    if (err) {
        console.log("I am sorry");
    } else {
        fs.writeFile("./demo2.txt",
            data.toString(),
            (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("data written succesfully");
                }
            })
    }
});