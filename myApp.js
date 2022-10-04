let express = require('express');
let app = express();

// console.log("Hello World") ;        

var temp = (req,res) =>
{
    res.send("Hello Express") ; 
}

app.get("/", temp); 
































 module.exports = app;
