function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  //na ultima linha informamos para o software para carregar o cenario.
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
//chamando todas as funçoes criadas no codigo.