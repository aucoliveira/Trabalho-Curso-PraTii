// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let numberOne = parseInt(prompt("Informe o primeiro valor: "));
let numberTwo;

do{
    numberTwo = parseInt(prompt("Informe o segundo valor: "));
}while( numberOne === numberTwo);

if (numberOne < numberTwo) {
    console.log(numberOne," ",numberTwo);
} else {
    console.log(numberTwo, " ", numberOne);
}