//   IMPORTAR O EXPRESS  
// preciso atribuilo a uma variavel e usar o comando require ou seja uma requisiçao.
// e dentro dessa requisiçao entre aspas coloco o nome do framework

var express = require('express');

// APP

// preciso ter acesso as funcionalidades do express, por isso criei uma variavel chamada app que vai receber framework express.
var app = express();

//ESPECIFICAR LOCAL DO CSS E DA IMAGEM 

app.use(express.static(__dirname + '/pasta'));



//  ROTAS 
// quando for acessado essa rota nos vamos ter uma funçao, iremos ter dois parametros, req, e o res, req de requisiçao mando pra ele a mensagem ou melhor o pedido, res seria de resposta oque ele deveria me retornar ou seja a pagina html.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html'); //pra enviar arquivo html 


});

// SERVIDOR
// aki preciso de uma porta, ou seja um servidor para ele me retorna a pagina, uma porta.
app.listen(8080);

