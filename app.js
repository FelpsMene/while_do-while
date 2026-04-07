/* instalar readline com npm
npm install readline-sync, ou no terminal ou no chatbot 
node_modules, package nunca sobe para o github, é só para o ambiente local, não precisa subir para o github 
para comentar varioas lonhas shift + alt + a
*/
// const r = require('readline-sync'); // pode ser require, request etc... mas assim é mais fácil de escrever, e é o nome da variável que vai receber a biblioteca, pode ser qualquer nome, mas é comum usar a primeira letra da biblioteca, ou o nome completo, como readlineSync

let nota;
/* 
do { 
    //executa o bloco
    nota = parseFloat(r.question("digite uma nota de 0 a 10: ")); // parse float torna ele um float

    if( nota< 0 || nota > 10 ){
        console.log("nota inválida, digite uma nota de 0 a 10");
    }
       
} while (nota < 0 || nota > 10); //guarda condição

console.log("nota válida: " + nota); */
//const r = require('readline-sync');

// variavel
/* 
let soma = 0;
let contador = 1;

// contador para controlar o numero de notas
while ( contador <= 5) {

    // solicita a nota do usuário
    let nota = parseFloat(r.question(`Nota ${contador}: `));

    // realiza o calculo das notas, 4 notas.
    soma += nota;

    // incrementa o contador para a próxima nota
    contador++;
}

// define a media a soma da 4 notas dividido por 4, para obter a média.
let media = soma / 5;

//printa a média e usa toFixed para limitar a 2 casas decimais.
console.log("A média é: " + media.toFixed(2)); */

const r = require('readline-sync');

// média com do while

let somaDoWhile = 0;
let contadorDoWhile = 1;

do {
    let nota = parseFloat(r.question(`Nota ${contadorDoWhile}: `));
    somaDoWhile += nota;
    contadorDoWhile++;

} while (contadorDoWhile <= 5);

let mediaDoWhile = somaDoWhile / 5;
console.log("A média é: " + mediaDoWhile.toFixed(2)); //ToFixed explica que é para limitar a quantidade de casas decimais, no caso 2.