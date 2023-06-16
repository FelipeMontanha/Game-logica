let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//criando as variaveis do visual do jogo.

let somDaTrilha;
let somDosPontos;
let somDaColisao;
//criação da variavel dos sons do jogo.

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  //criando a função de carregamento da imagem para a variavel.
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  //nessa ultima linyha foi criado uma lista aonde passamos quais imagens serão carregadas em cada indice.
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDosPontos = loadSound("sons/pontos.wav")
  somDaColisao = loadSound("sons/colidiu.mp3")
  //nessas ultimas tres linhas foi feito o carregamento dos sons em suas variaveis.

}