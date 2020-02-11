var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/collegelibrary");

var studentSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    gender:String,
    active:Boolean
})

exports.Student=mongoose.model('Student',studentSchema,'students');


var bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:String,
    pubDate:Date
})

exports.Book=mongoose.model('Book',bookSchema,"books");
