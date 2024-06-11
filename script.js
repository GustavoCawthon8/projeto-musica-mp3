const botaoPlayPause = document.getElementById("play-pause");
const audioMusica = document.getElementById("musica");
const boatoAvanca = document.getElementById("proximo")
const botaoVolta = document.getElementById("anterior");
const nomeMusica = document.getElementById("nMusica");

let taTocando = 0;
const numeroDeMusicas = 11;
let musicaAtual = 1;

function trocarMudica() {
  nomeMusica.innerHTML = "Musica " + musicaAtual;
  
}
function tocarFaixa() {
  audioMusica.play();
  botaoPlayPause.classList.remove("bi-play-fill")
  botaoPlayPause.classList.add("bi-pause-circle-fill")
  
}
function pausaFaixa(){
  audioMusica.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-fill");
  
}
function tocaOuPausa(){
  if(taTocando === 0){
    tocarFaixa()
    taTocando = 1;
  }else{
    pausaFaixa();
    taTocando = 0;
  }
}

function proximaFaixa() {
  if(musicaAtual === numeroDeMusicas){
    musicaAtual = 1;
  }else{
    musicaAtual = musicaAtual +1;
  }
  audioMusica.src = "musicas/" + musicaAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarMudica();
}
function anteriorFaixa() {
  if(musicaAtual === 1){
    musicaAtual = numeroDeMusicas;
  }else{
    musicaAtual = musicaAtual -1;
  }
  audioMusica.src = "musicas/" + musicaAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarMudica();
}

botaoPlayPause.addEventListener("click", tocaOuPausa);
boatoAvanca.addEventListener("click", proximaFaixa);
botaoVolta.addEventListener("click", anteriorFaixa);