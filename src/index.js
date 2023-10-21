 export const gallerySwiper = new Swiper(".gallery__slider", {
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    centeredSlides: false,
    initialSlide: 0,
    loop: true,
    loopedSlides: 3,
    spaceBetween: 16,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      835: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 3.4,
        slidesPerGroup: 1,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    autoplay: {
      delay: 5000,
    },

    speed: 1000,

  });

  export const toursSwiper = new Swiper(".our-tours__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: false,
    initialSlide: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      835: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      autoplay: {
        delay: 5000,
      },
  
      speed: 1000,
    },

    autoplay: {
      delay: 5000,
    },

    speed: 1000,

  });

  export const reviewSwiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 32,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      835: {
        slidesPerView: 2.2,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      autoplay: {
        delay: 5000,
      },
  
      speed: 1000,
    },

  });

