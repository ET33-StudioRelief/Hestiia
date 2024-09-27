import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperBlog() {
  new Swiper('.swiper-blog', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 200,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // Pour les écrans de taille supérieure à 767px
      1200: {
        slidesPerView: 2,
        spaceBetween: 30, // Ajustement de l'espacement pour les grands écrans
      },
    },
  });
}

export function swiperJoin() {
  new Swiper('.mission-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 200,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
