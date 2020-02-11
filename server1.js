var express=require("express");
var app=express();

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Welcome to My Node Server")
})

app.listen(5000,()=>{
    console.log("Server is started")
})