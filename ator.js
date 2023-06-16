let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;
//criando as variaveis de parametros do ator.

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
  //nessa função informamos para o software para carregar a imagem do ator e passamos os parametros da posição (x, y) e os parametros do tamanho da imagem.
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}
//função para determinar como o personagem se movimenta com a o aperto das teclas pelo player.

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], tamanhoXcarro, tamanhoYcarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
      //nessa função verificamos a colisão do personagem com os veiculos no mapa, fazemos tambem com que quando tenha essa colisão o personagem volte ao ponto inicial do mapa e tambem toque o som de colisão do personagem com o veiculo.
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}
//função para que o personagem volte ao ponto inicial do mapa.

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,165,0))
  text(meusPontos, width / 5, 27);
  // função para determinar tamanho, cor, posição e espaço aonde vai ficar o placar.
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDosPontos.play();
    voltaAtorPosicaoInicial();
  }
  //função para determinar o ponto ganho ao atravessar o mapa e tambem determinar o momento em que ira tocar o som de ponto.
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
  //função para verificar se a pontuação é menor que zero para que o jogador não fique com a pontuação negativa.
}

function podeSeMover(){
  return yAtor < 366;
  //função para verificar se o personagem esta no limite do cenario para que o mesmo não suma da tela.
}