// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let  nota = parseFloat(prompt("Digite o valor da sua nota: "))

if (isNaN(nota)) {
    console.log("Digite um valor válido!")
} else if (nota > 0 && nota < 3) {
    console.log("Você é foi reprovado.");
} else if (nota >= 3 && nota < 7) {
    console.log("Você está em recuperação");
} else {
    console.log("Parabéns, você foi aprovado.")
};