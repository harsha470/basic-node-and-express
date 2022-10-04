let express = require('express');
let app = express();
var path = require('path') 

// console.log("Hello World") ;        
// var absPath = __dirname + "/views/index.html" ; 

app.use("/public",express.static(__dirname + "/public")) ; 
app.get("/", (req,res)=>
{
    res.sendFile(__dirname + "/views/index.html") ; 
}); 

































 module.exports = app;
