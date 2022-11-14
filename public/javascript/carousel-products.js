let $simpleCarousel = document.querySelector('.container-produtos');


new Glider($simpleCarousel, {
  slidesToShow: "auto",
  slidesToScroll: 5,
  scrollLock: true,
  draggable: true,
  dragVelocity: 1,
});