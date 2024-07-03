console.log('Bem vindo a calculadora!\nEu faço cálculos de adição, subtração, multiplicação, divisão e porcentagem... Demais cálculos em breve...')

const prompt = require("prompt-sync")({ sigint: true });

function numero1() {
    let num1 = prompt('Digite um número: ');
    num1 = parseFloat(num1);
    if (!isNaN(num1)){
        return num1;
    } else {
        console.log('Não é um número, tente novamente.');
        return numero1();
    }
}

function numero2() {
    let num2 = prompt('Digite o segundo número: ');
    num2 = parseFloat(num2);
    if (!isNaN(num2)){
        return num2;
    } else {
        console.log('Não é um número, tente novamente.');
        return numero2();
    }
}

function adicao(n1,n2){
    let soma = n1 + n2;
    return soma
}

function subtracao(n1,n2){
    let diminuir = n1 - n2;
    return diminuir
}

function multiplicacao(n1,n2){
    let multiplicar = n1 * n2;
    return multiplicar
}

function divisao(n1,n2){
    let dividir = n1 / n2;
    return dividir
}

function porcentagem(n1,n2){
    let percentual = (n1 * n2) / 100;
    return percentual
}

function calculadora() {
    let n1 = numero1();
    let n2 = numero2();

    console.log('Escolha a operação:');
    console.log('1 - Adição');
    console.log('2 - Subtração');
    console.log('3 - Multiplicação');
    console.log('4 - Divisão');
    console.log('5 - Porcentagem');

    let opcao = prompt('Digite o número da operação desejada: ');

    switch (opcao) {
        case '1':
            console.log('Resultado da adição:', adicao(n1, n2));
            break;
        case '2':
            console.log('Resultado da subtração:', subtracao(n1, n2));
            break;
        case '3':
            console.log('Resultado da multiplicação:', multiplicacao(n1, n2));
            break;
        case '4':
            console.log('Resultado da divisão:', divisao(n1, n2));
            break;
        case '5':
            console.log('Resultado da porcentagem:', porcentagem(n1, n2));
            break;
        default:
            console.log('Opção inválida. Por favor, escolha uma operação válida.');
    }
}

calculadora();