const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

//Body Parser
//the code below is responsible  to translate the form's data into a javascript structure
//extended:false
app.use(bodyParser.urlencoded({extended:false}));

//Allowing to read form's data sent from JSON. It's a lot of  used when we work with API.
app.use(bodyParser.json());


//Routers
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/question',(req,res)=>{
   res.render('question');
});

app.post('/savequestion',(req,res)=>{
    var title = req.body.fieldtitle             // Body Parser is responsible to available the object body
    var description = req.body.fielddescription // Body Parser is responsible to available the object body
    res.render('savequestion',{title:title, description:description});
})

app.listen(3000,()=>{
    console.log("app running");
});