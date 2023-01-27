let $simpleCarousel = document.querySelector('.container-produtos');


new Glider($simpleCarousel, {
  slidesToShow: 5,
  slidesToScroll: 5,
  scrollLock: true,
  draggable: true,
  dragVelocity: 1,
});