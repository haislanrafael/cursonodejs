
// Aki cria uma funçao para somar, passando por parametro 2 numero o numero1,numero2
function somar(numero1, numero2){

    return numero1 + numero2

};

// Aki cria uma funçao para multiplicar, passando por parametro 2 numeros o numero1,numero2

function multiplicar(numero1, numero2){

    return numero1 * numero2

}

// modulos são bibliotecas que da pra exportar
// aki exportei a funçao somar e multiplicar.

module.exports = {

    somar, multiplicar

};

