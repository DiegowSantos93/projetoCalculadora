console.log('Bem vindo a calculadora!\nEu faço cálculos de adição, subtração, multiplicação, divisão e porcentagem... Demais cálculos em breve...')

const prompt = require("prompt-sync")({ sigint: true });

function numero1(){
    let num1 = prompt('Digite um número: ');
    num1 = parseFloat(num1);
    if (!isNaN(num1)){
        return num1;
    } else {
        console.log('Não é um número, tente novamente.');
        return numero1();
    }
}

function numero2(){
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

let resultado = 0;

calculadora();

function calculadora(){
    let n1 = numero1();
   
    console.log('Escolha a operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\n0 - Para encerrar');
 
    let opcao = prompt('Digite o número da operação desejada: ');
        opcao = parseInt(opcao)
        if (opcao >= 0 && opcao <= 5){
            if (opcao == 0){
                console.log('Encerrando a calculadora, até logo!')
                process.exit();
            } else {
                let n2 = numero2();
        
                switch (opcao) {
                    case 1:
                        console.log(`${n1} + ${n2} =`, adicao(n1, n2));
                        resultado = adicao(n1,n2);
                        break;
                    case 2:
                        console.log(`${n1} - ${n2} =`, subtracao(n1, n2));
                        resultado = subtracao(n1,n2);
                        break;
                    case 3:
                        console.log(`${n1} X ${n2} =`, multiplicacao(n1, n2));
                        resultado = multiplicacao(n1,n2);
                        break;
                    case 4:
                        if (n2 === 0) {
                            console.log('Divisão por zero não é permitida.');
                            return calculadora();
                        }
                        console.log(`${n1} / ${n2} =`, divisao(n1, n2));
                        resultado = divisao(n1,n2);
                        break;
                    case 5:
                        console.log(`${n1} % ${n2} =`, porcentagem(n1, n2));
                        resultado = porcentagem(n1,n2);
                        break;
                }
                recalculo();
            }
        } else {
            console.log('Não é uma opção válida, tente novamente.');
            return calculadora();
        }
}

function recalculo(){
    
    if (resultado === 0){
        resultado = calculadora();
    }        
    console.log('Escolha a operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\n0 - Para encerrar');
         
    let opcao = prompt('Digite o número da operação desejada: ');
        opcao = parseInt(opcao);
        if (opcao >= 0 && opcao <= 5){
            if (opcao == 0){
                console.log('Encerrando a calculadora, até logo!')
                process.exit();
            } else {
                let n2 = numero2();
        
                switch (opcao) {
                case 1:
                    console.log(`${resultado} + ${n2} =`, adicao(resultado, n2));
                    resultado = adicao(resultado, n2)
                    break;
                case 2:
                    console.log(`${resultado} - ${n2} =`, subtracao(resultado, n2));
                    resultado = subtracao(resultado, n2)
                    break;
                case 3:
                    console.log(`${resultado} X ${n2} =`, multiplicacao(resultado, n2));
                    resultado = multiplicacao(resultado, n2)
                    break;
                case 4:
                    if (n2 === 0) {
                        console.log('Divisão por zero não é permitida.');
                        return recalculo();
                    }
                    console.log(`${resultado} / ${n2} =`, divisao(resultado, n2));
                    resultado = divisao(resultado, n2)
                    break;
                case 5:
                    console.log(`${resultado} % ${n2} =`, porcentagem(resultado, n2));
                    resultado = porcentagem(resultado, n2)
                }
            recalculo(); 
        }
        } else {
            console.log('Não é uma opção válida, tente novamente.');
        return recalculo();
        }       
} 