// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const  prompt = require('prompt-sync')();

let valor;
let total = 0;
let count = 0;

do {
    valor = parseFloat(prompt("Digite um valor ou '0' para sair: "));
    total += valor;
    count++;
} while ( valor !== 0);

media = total/count;

console.log("O valor toal foi %f, e sua média é %f", total, media);