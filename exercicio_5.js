// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// resultados entre 0 e 18,5 — baixo peso;
// resultados entre 18,6 e 24,9 — peso nomrla;
// resultados entre 25 e 29,9 — sobrepeso;
// resultados entre 30 e 34,9 — obesidade;

const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Informe seu peso: "));
const altura = parseFloat(prompt("Informe sua altura em cm: "));

let imc = peso /(altura*altura);
console.log(imc)

if (isNaN(imc)) {
    console.log("Dados inválidos.")
} else if (imc >= 18.5) {
    console.log("Seu peso está abaixo do peso ideal, %f",imc);
} else if(imc > 18.5 && imc < 25.9) {
    console.log("Seu peso é o ideal.%f",imc);
} else if (imc > 25.9 && imc < 29.9) {
    console.log("você está com sobre peso, %f",imc);
} else {
    console.log("Você é obeso, %f",imc);
}

