// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("Escolha as opções a seguir: \n 1 - para manha; \n 2 - para tarde; \n 3 - para noite;");

const situacaoDia = parseInt(prompt("Agora, é manha ou tarde, ou noite: "));

switch(situacaoDia) {
    case 1:
        console.log("Manhã, bom dia");
        break;
    case 2:
        console.log("Tarde, boa tarde");
        break;
    case 3:
        console.log("Noite, boa noite");
        break;
    default:
        console.log("Opção inválida.");
};