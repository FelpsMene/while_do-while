/* instalar readline com npm
npm install readline-sync, ou no terminal ou no chatbot 
node_modules, package nunca sobe para o github, é só para o ambiente local, não precisa subir para o github 

*/
const r = require('readline-sync'); // pode ser require, request etc... mas assim é mais fácil de escrever, e é o nome da variável que vai receber a biblioteca, pode ser qualquer nome, mas é comum usar a primeira letra da biblioteca, ou o nome completo, como readlineSync

let nota;

do { 
    //executa o bloco
    nota = parseFloat(r.question("digite uma nota de 0 a 10: ")); // parse float torna ele um float

    if( nota< 0 || nota > 10 ){
        console.log("nota inválida, digite uma nota de 0 a 10");
    }
       
} while (nota < 0 || nota > 10); //guarda condição

console.log("nota válida: " + nota);