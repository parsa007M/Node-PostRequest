// ! POST DATA FROM BROWSER:

// STEP 1: CREATE VARIABLES AND DEFINE THE MODULES:

var express = require('express');
var app = express();
var path = require('path');

// ! BODY-PARSER-------------------------------

var bodyParser = require("body-parser");

// To install body-parser: npm install body-parser

app.use(bodyParser.urlencoded({extended: false}));

//app.use(bodyParser.json());


// ! GET REQUEST:-------------------------------
app.get ('/', function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
});



// ! POST REQUEST:-----------------------------

app.post('/task', function(req,res){

// console.log(req); 
// => Request Object is so mix and complicated to read!

console.log(req.body);
// BodyParser helps us to parse the request object body to find correct data easily!
// => { mytask: 'tasskkk' }

var my_task = req.body.task;

//console.log("From Client Post Request: Today's Task="+my_task)

res.end("Yesss, it is done!")

});


// LISTEN THE PORT:
app.listen(5000, function(){
    console.log("Started on port  5000!");
})