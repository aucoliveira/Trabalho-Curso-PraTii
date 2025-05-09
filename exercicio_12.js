// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

const prompt = require('prompt-sync')();

let numero;

do {
    numero = parseInt(prompt("Informe um número: "));
} while (isNaN(numero));

for (let i = 1; i <= 10; i++) {
    console.log("%d + %d = %d", i,numero,i+numero);
}
console.log("-------------");
for (let i = 1; i <= 10; i++) {
    console.log("%d - %d = %d",i,numero,i-numero);
}
console.log("-------------");
for (let i = 1; i <= 10; i++) {
    console.log("%d x %d = %d", i,numero,i*numero);
}
console.log("-------------");
for (let i = 1; i <= 10; i++) {
    console.log("%d / %d = %d", i,numero ,i/numero);
}