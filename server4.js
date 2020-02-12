var express=require('express');
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

var students=require('./routes/students')
var books=require('./routes/books')

app.all('/api/*', function(req,res,next){
    const auth = {login: "test", password: "test"} // change this
   
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')
   
    // Verify login and password are set and correct
    if (!login || !password || 
        login !== auth.login || 
        password !== auth.password) 
   {
      res.set('WWW-Authenticate', 'Basic realm="nope"') // change this
      res.status(401).send('Request is not authorized. You must pass credentials') 
      return
    }
   else {
    next();
   } 
});

app.use("/api/students",students);
app.use("/api/books",books);

app.listen(5000,()=>{
    console.log("server is started")
})