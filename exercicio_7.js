// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qtdMaca = parseInt(prompt("Quantas maças comprou? "));

if (isNaN(qtdMaca)) {
    console.log("Informe um valor válido.");
} else if ( qtdMaca < 12) {
    console.log("O valor total das suas maças, são %f",qtdMaca*0.30);
} else {
    console.log("O valor total das suas maças, são %f", qtdMaca*0.25)
}