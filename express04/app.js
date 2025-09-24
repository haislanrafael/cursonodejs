// importar o express
var express = require('express');


// criando variavel para ter acesso as funcionalidades do Express
var app = express();


//rota 
app.get('/', function(req, res){

    res.write('Utilizando o Express');
    res.end();
})

// servidor 

app.listen(8080);
