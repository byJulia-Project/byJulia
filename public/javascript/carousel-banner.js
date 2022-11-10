// Inicia com um contador para as imagens
let imagemContador = 0;

// Faz a chamada da função no inicio do arquivo
showSlides();

// Define função 
function showSlides(){
  let i;
  // Pega todos os elementos com a classe `.carousel-image`
  let imagens = document.getElementsByClassName("carousel-image");
  // Pega todos os elementos com a classe `.image-cont`
  let bolinha = document.getElementsByClassName("image-cont");

  // Em toda imagem define o display none;
  for(i = 0; i < imagens.length; i++){
    imagens[i].style.display = "none";
  }
  imagemContador++;
  // Itera contador

  // Se contador for maior que o numero de imagens, a variavel imagemContador se torna 1;
  if(imagemContador > imagens.length) imagemContador = 1;

  // Em toda bolinha faz o replace da classe active para vazio.
  for(i = 0; i<bolinha.length;i++){
    bolinha[i].className = bolinha[i].className.replace(" active", "");
  }

  // Na imagem é atribuído o Display block 
  imagens[imagemContador-1].style.display = "block";
  // Na imagem é atribuído o a classe active
  bolinha[imagemContador-1].className += " active";

  // Configura um tempo para a função ser rodada. a cada 5000ms
  setTimeout(showSlides, 5000);
}