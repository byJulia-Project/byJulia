let bannerIndex = 0;
showSlides();

function showSlides(){
  let i;
  let imagens = document.getElementsByClassName("carousel-image");
  let bolinha = document.getElementsByClassName("image-cont");

  for(i = 0; i < imagens.length; i++){
    imagens[i].style.display = "none";
  }
  bannerIndex++;

  if(bannerIndex > imagens.length) bannerIndex = 1;

  for(i = 0; i<bolinha.length;i++){
    bolinha[i].className = bolinha[i].className.replace(" active", "");
  }
  imagens[bannerIndex-1].style.display = "block";
  bolinha[bannerIndex-1].className += " active";

  setTimeout(showSlides, 5000);
}
