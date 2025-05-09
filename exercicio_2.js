// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite sua idade: "));

if (isNaN(idade)) {
    console.log("Digite um valor válido!")
} else if (idade > 0 && idade < 14) {
    console.log("Você é uma criança.");
} else if (idade >= 14 && idade < 18) {
    console.log("Você é um adolecente.");
} else if (idade >= 18 && idade < 50) {
    console.log("Você é adulto");
} else {
    console.log("Você é idoso.");
};