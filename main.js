const slider = document.querySelector('.cats-slider');
const pagination = document.querySelectorAll('.swiper-pagination');
function mobileSlider() {
  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          slide.style.width = '240px';
        });
      },
    }
  });
  if (window.innerWidth >= 768) {
    if (slider.classList.contains('swiper-initialized')) {
      swiper.disable();
      swiper.el.classList.add('-non-slider');
    }
  }
  else {
    swiper.enable();
    swiper.el.classList.remove('-non-slider');
  }
}
mobileSlider()
window.addEventListener('resize', () => { mobileSlider(); });

// var button = document.querySelector('.main__button');
// var buttonTextOpen = document.querySelector('.button__text--open');
// var buttonTextClose = document.querySelector('.button__text--close');
// var slide = document.querySelectorAll('.swiper-slide');
// if (window.innerWidth >= 768 && window.innerWidth <= 1120) {
// button.addEventListener('click', function () {
//   var display = "block";
//   if (buttonTextClose.style.display == "none") {
//     display = "none";
//     buttonTextClose.style.display = "block";
//     buttonTextOpen.style.display = "none";
//     button.querySelector(".main__button-img").style.transform = "rotate(360deg)";
//   }
//   else {
//     display = "block";
//     buttonTextClose.style.display = "none";
//     buttonTextOpen.style.display = "block";
//     button.querySelector(".main__button-img").style.transform = "rotate(180deg)";
//   }
//   document.getElementById("slide7").style.display = display;
//   document.getElementById("slide8").style.display = display;
//   document.getElementById("slide9").style.display = display;
//   document.getElementById("slide10").style.display = display;
//   document.getElementById("slide11").style.display = display;
// });
// }
// if (window.innerWidth > 1120) {
// button.addEventListener('click', function () {
//   var display = "block";
//   if (buttonTextClose.style.display == "none") {
//     display = "none";
//     buttonTextClose.style.display = "block";
//     buttonTextOpen.style.display = "none";
//     button.querySelector(".main__button-img").style.transform = "rotate(360deg)";
//   }
//   else {
//     display = "block";
//     buttonTextClose.style.display = "none";
//     buttonTextOpen.style.display = "block";
//     button.querySelector(".main__button-img").style.transform = "rotate(180deg)";
//   }
//   document.getElementById("slide9").style.display = display;
//   document.getElementById("slide10").style.display = display;
//   document.getElementById("slide11").style.display = display;
// });
// }
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