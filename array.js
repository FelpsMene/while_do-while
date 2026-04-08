const r = require('readline-sync');
//lista de numeros de telefone
/*const numero = [];

 console.log(("faça a sua lista de numeros de telefone (com limite de 10 numeros)"));
for (let i = 0; i < 10; i++) {
    numero[i] = r.question("digite um numero de telefone: ");
} 
for (let i = 0; i < 10; i++) {
    console.log(`numero de telefone ${i+1}: ${numero[i]}`);
}  */

// tabuada de multiplicação

let num_tabuada;
console.log("tabuada de multiplicação");
console.log("insira um numero para ver a tabuada");
num_tabuada = r.question("digite um numero: ");
for (let i = 0; i <= 10; i++) {
    console.log(`${num_tabuada} x ${i} = ${num_tabuada * i}`);
}   