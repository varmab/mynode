var express=require('express');
var app=express();

var db=require('./db')

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/students",function(req,res){
    db.Student.find({},function(err,students){
        if(err) res.send(err);
        res.send(students);
    })
})

app.post("/api/students",function(req,res){
    var newStudent=new db.Student(req.body)
    newStudent.save(function(err,student){
        if(err) res.send(err);
        res.send(student);
    })
})

app.get("/api/students/:id",function(req,res){
    var id=req.params.id;
    db.Student.find({_id:id},function(err,student){
        if(err) res.send(err);
        res.send(student);
    })
})

app.get("/api/students/search/:term",function(req,res){
    var term=req.params.term;
    var latestStudents=students.filter((currentStudent)=>{
        return currentStudent.name.indexOf(term)!=-1
    })
    res.send(latestStudents);
})

app.delete("/api/students/:id",function(req,res){
    var id=req.params.id;
    db.Student.findOneAndDelete({_id:id},function(err,student){
        if(err) res.send(err);
        res.send(student);
    })
})

app.put("/api/students/:id",function(req,res){
    var id=req.params.id;
    db.Student.findByIdAndUpdate(id,req.body,{new:true},function(err,student){
        if(err) res.send(err);
        res.send(student);
    })
    
})

app.listen(5000,()=>{
    console.log("server is started")
})