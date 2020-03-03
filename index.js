const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'))
var path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.render('index');

});

app.get('/question',(req,res)=>{
    
    res.render('question');

});

app.listen(3000,()=>{
    console.log("app running");
});