// express

var express = require('express');

// body-parser
 var bodyParser = require('body-parser');

 // cria o app
 var app = express();

 
// Configurar o BodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false})); // trabalhar com o metodo post
    
    
// rotas 

app.get('/',function(req,res){
    res.sendFile(__dirname + '/formulario.html');
})

app.post('/receber', function(req, res ){
res.write("seu nome:" + req.body.nome);
    res.end();
})

// servidor 

app.listen(8080);


