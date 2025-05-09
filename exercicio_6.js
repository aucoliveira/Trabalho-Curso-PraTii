// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

let ladoA = parseInt(prompt("Informa o lado A: "));
let ladoB = parseInt(prompt("Informe o lado B: "));
let ladoC = parseInt(prompt("Informe o lado C: "));

if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log("Por favor, digite valores numéricos positivos para os lados do triângulo.");
} else {
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        console.log("Os lados fornecidos formam um triângulo.");
        
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Triângulo equilátero: todos os lados são iguais.");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo isósceles: dois lados são iguais.");
        } else {
            console.log("Triângulo escaleno: todos os lados são diferentes.");
        }
    } else {
        console.log("Os lados fornecidos NÃO formam um triângulo.");
    }
}