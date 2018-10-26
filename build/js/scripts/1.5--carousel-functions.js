// JAVASCRIPT LAYER [APP.JS]  =========================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. SWIPER CAROUSEL
// ==
// ====== INDEX  ======================================================================================================

// A. SHOW/HIDE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.features-carousel', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. WITH NO LOOP DESKTOP ------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.no-loop', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 15,
  noSwiping: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      noSwiping: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
      loop: true,
      noSwiping: false,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      noSwiping: false,
    }
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.images-carousel', {

  direction: 'horizontal',
  loop: true,
  lazy: true,
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A.1. MOBILE CLASS --------------------------------------------------------------------------------------------------

var mySwiper = new Swiper ('.single-carousel', {

  direction: 'horizontal',
  loop: true,
  lazy: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
// A.1. END -----------------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++