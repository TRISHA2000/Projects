var path = require("path");

var express = require("express");
var app = express();

//jai file __dirname  occour hobche Curent Working Directori okhn thke hoba.
// eg: ai case a __dirname = E:\work\git\Projects\my-first-webapp\server
console.log(path.resolve(__dirname));

//jei  Current Working Directory thke command script ta fire hoye ./ aar ../ shei directory consider kore
//1.
//cwd jodi E:\work\git\Projects\my-first-webapp hoye aar node .\server\server.js fire kora hoye
// tahole path.resolve("./") E:\work\git\Projects\my-first-webapp hobe
//2.
//cwd jodi E:\work\git\Projects\my-first-webapp\server hoye aar node .\server.js fire kora hoye
// tahole path.resolve("./") E:\work\git\Projects\my-first-webapp hobe
console.log(path.resolve("./"));

//jei  Current Working Directory thke command script ta fire hoye ./ aar ../ shei directory consider kore
//1.
//cwd jodi E:\work\git\Projects\my-first-webapp hoye aar node .\server\server.js fire kora hoye
// tahole path.resolve("../") E:\work\git\Projects hobe
//2.
//cwd jodi E:\work\git\Projects\my-first-webapp\server hoye aar node .\server.js fire kora hoye
// tahole path.resolve("../") E:\work\git\Projects\my-first-webapp hobe
console.log(path.resolve("../"));

console.log(path.resolve("../static"));

app.use("/assets", express.static(path.resolve(__dirname, "../static")));

app.listen(8080, function (request, responce) {
    console.log("server started at 8080");
    
})