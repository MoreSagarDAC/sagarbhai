const express = require('express')
var app = express();
const mod = require('./module')

app.get("/home",function (req,resp) 
{
    resp.sendFile('/public/index.html',{root:__dirname});
})

app.get("/submit",function (req,resp) 
{
    var num1 = parseInt(req.query.num1)
    var num2 = parseInt(req.query.num2)
    var res = (mod.add(num1,num2)) 
    resp.send("<h1>Addition : "+res+"</h1>")
})

app.listen(6969)
console.log("server running on 3000");