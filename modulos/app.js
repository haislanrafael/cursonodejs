// importando o module http

var http = require('http');

// criando servidor
// req (requisiçao) quando o servidor esta
// recebendo minha solicitação
// o res é quando a gente vai exibir algo
// veja:

http.createServer(function(req,res){
    res.write(' node.js');
    res.end();
}).listen(8081);

