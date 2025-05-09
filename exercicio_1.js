// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Não é número.");
} else if ((numero%2) == 0) {
    console.log("O numero é %d par", numero)
} else {
    console.log("O numero %d é impar", numero)
}