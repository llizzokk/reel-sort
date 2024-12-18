'use strict';

import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1280: {
      spaceBetween: 32,
      centeredSlides: false,
      slidesPerView: 2,
    },
  },
});
