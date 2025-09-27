
// primeiramente criamos uma pasta e dentro dessa pasta crio o arquivo 
// app.js depois de criado o arquivo app.js
// importar o express com o comando npm install express
// pelo terminal executado a partir da pasta express04


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
