let express = require('express');
let app = express();
var path = require('path') ;
var dotenv = require('dotenv').config() ; 

// console.log("Hello World") ;        
// var absPath = __dirname + "/views/index.html" ; 

app.use("/public", express.static(__dirname + "/public")) ; 
app.get("/", (req,res)=>
{
    res.sendFile(__dirname + "/views/index.html") ; 
}); 

var obj = {"message": "Hello json"} ; 
app.get("/json",(req,res)=>
{
    if(process.env.MESSAGE_STYLE === "uppercase")
    {
        obj["message"] = "HELLO JSON" ; 
    }
    res.json(obj) ; 
})
































 module.exports = app;
