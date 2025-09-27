// importando o arquivo somaemulti para poder rodar 
// se usa o require pra importar como esta escrito em baixo veja:

var somaemulti = require('./somaemulti')

//Obtendo a funçao para multiplicar
//acessando a funçao multi
// outra observaçao é que podemos criar nossas proprias funçoes e 
// importalas como a funçao que criamos no arquivo somaemulti.js.
// veja que importamos a funçao multiplicar do arquivo somaemulti.js
// e usamos ela aqui no arquivo app.js.

var multiplicar  = somaemulti.multiplicar;

//Realizar um calculo de multiplicação
// aki é a entrada primeiro passando como argumentos dois valores do parametro numero1, numero2
// os valores e depois a saida com o valor da multi.

console.log(multiplicar(5,6));

// chamando a funçao pra somar 
//passando dois valores como argumentos e mostrando o resultado da soma.

var somar = somaemulti.somar;

console.log(somar(5,2));

