alert('Bem vindo ao jogo do número secreto');
let numMax = 0;
//Escolhendo a dificuldade
while(numMax < 10) {
    let numEsc = prompt('Escolha a dificuldade, 1 Fácil, 2 Médio, 3 Difícil');
    if (numEsc == 1){
        numMax = 10;
    } else if (numEsc == 2){
        numMax = 100;
    } else if (numEsc == 3){
        numMax = 1000;
    } else {
        alert('Escolha um número válido!')
    }

}

let numSec = parseInt(Math.random() * numMax + 1);
console.log(numSec);
let chute;
let tentativas = 1; 

//Enquanto o chute for diferente do número secreto
while (chute != numSec) {
    chute = prompt(`Escolha um numero entre 1 e ${numMax}`);
    // Se o chute for igual ao número secreto
    if (chute == numSec) {
        break;  
    } else{
        if(chute > numSec) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns! Você acertou o número secreto ${numSec} com ${tentativas} ${palavraTentativa}.`);

