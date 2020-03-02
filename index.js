const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');

});

app.get('/home/:nome/:sobrenome',(req,res)=>{
    
app.use(express.static('public'))

    var nome = req.params.nome;
    var sobrenome = req.params.sobrenome;
    var exibemsg = false;
    var categorias = [
        {nome:"Cozinha",descricao:"Artigos para cozinha"},
        {nome:"Escritório",descricao:"produtos para escritório"},
        {nome:"Personalizados",descricao:"produtos feitos sob encomenda"}
    ]
    
    res.render('home',{nome:nome,sobrenome:sobrenome,msg:exibemsg,categ:categorias});

});

app.listen(3000,()=>{
    console.log("app rodando");
});