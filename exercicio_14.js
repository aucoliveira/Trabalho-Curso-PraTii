// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numero;

do {
    numero = parseInt(prompt("Informe um número: "));
} while (numero <= 0 || isNaN(numero));

let fatorial = numero;

for (let i = numero - 1; i > 0; i--) {
    fatorial *= i;
}
console.log("o fatorial de %d é %d",numero, fatorial);