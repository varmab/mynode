var express=require('express');
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


//  id=3&name=Rahim

// {id:1,name:"Rahim"}

var students=[
    {
        id:1,
        name:"Ram",
        age:24
    },
    {
        id:2,
        name:"Robert",
        age:32
    }
]

app.get("/api/students",function(req,res){
    res.send(students);
})

app.get("/api/students/:id",function(req,res){
    var id=req.params.id;
    var currentStudent=students.find((student)=>{
        return student.id==id
    })
    res.send(currentStudent);
})

app.get("/api/students/search/:term",function(req,res){
    var term=req.params.term;
    var latestStudents=students.filter((currentStudent)=>{
        return currentStudent.name.indexOf(term)!=-1
    })
    res.send(latestStudents);
})

app.post("/api/students",function(req,res){
    var newStudent=req.body;
    students.push(newStudent);
    res.send(students);
})

app.delete("/api/students/:id",function(req,res){
    var id=req.params.id;
    var latestStudents=students.filter((student)=>{
        return student.id!=id
    })
    res.send(latestStudents);
})

app.put("/api/students/:id",function(req,res){
    var id=req.params.id;
    var latestStudent=students.find((student)=>{
        return student.id==id
    })
    latestStudent.name="Ravi";
    res.send(latestStudent);
})

app.listen(5000,()=>{
    console.log("server is started")
})