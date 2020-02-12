var express=require('express')
var router=express.Router()

var db=require('../db')

//Get all books
router.route("/")
    .get(function(req,res){
        db.Book.find({},function(err,books){
            if(err) res.send(err);
            res.send(books);
        })
    })
    .post(function(req,res){
        var newBook=new db.Book(req.body)
        newBook.save(function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
    })

//Getting single book
router.route("/:id")
    .get(function(req,res){
        var id=req.params.id;
        db.Book.find({_id:id},function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
    })
    .delete(function(req,res){
        var id=req.params.id;
        db.Book.findOneAndDelete({_id:id},function(err,student){
            if(err) res.send(err);
            res.send(book);
        })
    })
    .put(function(req,res){
        var id=req.params.id;
        db.Book.findByIdAndUpdate(id,req.body,{new:true},function(err,book){
            if(err) res.send(err);
            res.send(student);
        })
        
    })

module.exports=router;