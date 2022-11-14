let $simpleCarousel = document.querySelector('.container-produtos');


new Glider($simpleCarousel, {
  slideToShow: 5,
  slideToScroll: 5,
  scrollLock: true,
  draggable: false,
  dots: '.dots',
  exactWidth: true,
  arrows: {
    prev: '#prev',
    next: '#next'
  },
})