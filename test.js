new Swiper('.cats-slider', {
  cssMode: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween: 16,
      width: 326,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    }
  }
});
var button = document.querySelector('.main__button');
var buttonTextOpen = document.querySelector('.button__text--open');
var buttonTextClose = document.querySelector('.button__text--close');
var swiperWrapper = document.querySelector('.swiper-wrapper');
button.addEventListener('click', function () {
  swiperWrapper.classList.toggle('open');
  if (buttonTextClose.style.display == "none") {
    
    buttonTextClose.style.display = "block";
    buttonTextOpen.style.display = "none";
    button.querySelector(".main__button-img").style.transform = "rotate(360deg)";
  }
  else {
    
    buttonTextClose.style.display = "none";
    buttonTextOpen.style.display = "block";
    button.querySelector(".main__button-img").style.transform = "rotate(180deg)";
  }
});