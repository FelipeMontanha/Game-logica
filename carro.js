let yCarros = [40, 96, 150, 210, 270, 318];
//criamos uma lista com tres indices para a verificação dos valores de y dos veiculos.
let xCarros = [600, 600, 600, 600, 600 , 600];
//criamos uma lista com tres indices para a verificação dos valores de x dos veiculos.
let velocidadeCarros = [2, 2.5, 3.5, 5, 3.8, 2.3];
//criamos uma lista com tres indices para a verificação dos valores de velocidade dos veiculos.

let tamanhoXcarro = 50;
let tamanhoYcarro = 40;
// criando as variaveis dos parametros (x, y) do tamanho da imagem dos veiculos.

function mostraCarro(){
  for (let = i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], tamanhoXcarro, tamanhoYcarro)
    //nessa função passamos para o sistema verificar se i é menor que que o numero de indices da variavel imagemCarros e que assim i é igual a i mais 1, dessa maneira a função cria uma repetição na verificação de indices para fazer com que os carros sejam mostrados na tela.
  }
}


function movimentaCarro(){
  for (let = i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    //nessa função passamos para o sistema verificar se i é menor que que o numero de indices da variavel imagemCarros e que assim i é igual a i mais 1, dessa maneira a função cria uma repetição na verificação de indices para fazer com que a velocidade dos veiculos sejam passadas atraves dos indices.
  }
}
//função para determinar a velocidade do movimento dos tres carros.

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
        //nessa função passamos para o sistema verificar se i é menor que que o numero de indices da variavel imagemCarros e que assim i é igual a i mais 1, dessa maneira a função cria uma repetição na verificação de indices para fazer com que o carro retorne ao seu ponto inicial, e tambem utilizamos o if para repetir o mesmo processo nos  tres veiculos.
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
  //essa função foi criada para fazer com que o processo de reaparição dos veiculos seja repetido nos tres carros.
}