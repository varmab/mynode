var express=require("express");
var app=express();


app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname + "/public/contact.html");
})

app.get("/about",function(req,res){
    res.sendFile(__dirname + "/public/about.html");
})

app.listen(5000,()=>{
    console.log("Server is started")
});
