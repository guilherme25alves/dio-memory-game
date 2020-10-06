let order = [];
let clickedOrder = [];
let score = 0;

/**
 *   Classificação das cores
 * 
 *   0 - Verde
 * 
 *   1 - Vermelho
 * 
 *   2 - Amarelo
 * 
 *   3 - Azul
 * 
 * 
 */

 const blue = document.querySelector('.blue');
 const red = document.querySelector('.red');
 const green = document.querySelector('.green');
 const yellow = document.querySelector('.yellow');

 // Criação de Ordem Aleatória
 let shuffleOrder = () => {
     let colorOrder = Math.floor(Math.random() * 4);
     order[order.length] = colorOrder;
     clickedOrder = [];
     
     for(let i in order) {
          let elementColor = createColorElement(order[i]);
          lightColor(elementColor, Number(i) + 1); // Number trás um número que vai existir na nossa lista de Cores
     }      
 }

 // Acende a próxima Cor
 let lightColor = (element, number) => {
     number = number * 500;
     setTimeout(() => {
          element.classList.add('selected');
     }, number - 250);
     setTimeout(() => {
          element.classList.remove('selected');
     });
 }

 // Checa se os botões clicados são os mesmos de ordem gerada no jogo
 let checkOrder = () => {
      for(let i in clickedOrder) {
           if(clickedOrder[i] != order[i]) {
                gameOver();
                break;
           }
      }
      if(clickedOrder.length == order.length) {
           alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
           nextLevel();
      }
 }


 // Função para evento clique do usuário
 let click = (color) => {
      clickedOrder[clickedOrder.length] = color;
      createColorElement(color).classList.add('selected');

      setTimeout(() => {
           createColorElement(color).classList.remove('selected');
           checkOrder();
      }, 250)

      
 } 

 // Função que retorna a cor 
 let createColorElement = (color) => {
      if(color == 0) {
           return green;
      } else if(color == 1) {
           return red;
      } else if (color == 2) {
           return yellow;
      } else if( color == 3) {
           return blue;
      }
 }

 // Função para prózcimo nível do Jogo
 let nextLevel = () => {
      score++;
      shuffleOrder();
 }

 // Função para quem perder o jogo 
let gameOver = () => {
     alert(`Pontuação: ${score}\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo! `);
     order = [];
     clickedOrder = [];

     playGame();
}

// Função que inicia o jogo
let playGame = () => {
     alert(' Bem vindo ao DIO-Gênesis! Iniciando um novo jogo!');
     score = 0;

     nextLevel();
}

// Ativando eventos de click para as cores
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();