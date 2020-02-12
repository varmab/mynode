var express=require('express');
var router=express.Router();

var db=require('../db')

//Get all students
router.route("/")
    .get(function(req,res){
            db.Student.find({},function(err,students){
                if(err) res.send(err);
                res.send(students);
            })
    })
    .post(function(req,res){
        var newStudent=new db.Student(req.body)
        newStudent.save(function(err,student){
            if(err) res.send(err);
            res.send(student);
        })
    })

//Getting single student
router.route("/:id")
    .get(function(req,res){
        var id=req.params.id;
        db.Student.find({_id:id},function(err,student){
            if(err) res.send(err);
            res.send(student);
        })
    })
    .delete(function(req,res){
        var id=req.params.id;
        db.Student.findOneAndDelete({_id:id},function(err,student){
            if(err) res.send(err);
            res.send(student);
        })
    })
    .put(function(req,res){
        var id=req.params.id;
        db.Student.findByIdAndUpdate(id,req.body,{new:true},function(err,student){
            if(err) res.send(err);
            res.send(student);
        })
        
    })

//Searching for a student
router.get("/search/:term",function(req,res){
    var term=req.params.term;
    db.Student.find({ "firstName": { "$regex": term, "$options": "i" } },(err,students)=>{
        if(err) res.send(err);
        res.send(students);
    })
})

module.exports=router;