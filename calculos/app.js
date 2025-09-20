// importando o arquivo somaemulti para poder rodar 
// se usa o require pra importar como esta escrito em baixo veja:

var somaemulti = require('./somaemulti')

//Obtendo a funçao para multiplicar
//acessando a funçao multi

var multiplicar  = somaemulti.multiplicar;

//Realizar um calculo de multiplicação
// aki é a entrada primeiro passando por parametro
// os valores e depois a saida com o valor da multi.

console.log(multiplicar(5,6));

// chamando a funçao pra somar 
//passando dois valores 

var somar = somaemulti.somar;

console.log(somar(5,2));

