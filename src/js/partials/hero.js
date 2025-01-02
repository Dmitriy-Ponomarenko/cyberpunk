import Swiper from 'swiper';
import {Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

export function initializeHeroSlider() {
  const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    on: {
      init: () => updateSlidesBackground(),
      resize: () => updateSlidesBackground(),
    },
  });
}

  export function updateSlidesBackground() {
    const screenWidth = window.innerWidth;
    const pixelRatio = window.devicePixelRatio;
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
      let background;
      if (screenWidth >= 1280) {
        background = pixelRatio > 1 ? slide.dataset.bgPc2x : slide.dataset.bgPc;
      } else if (screenWidth >= 768) {
        background = pixelRatio > 1 ? slide.dataset.bgTablet2x : slide.dataset.bgTablet;
      } else {
        background = pixelRatio > 1 ? slide.dataset.bgMobile2x : slide.dataset.bgMobile;
      }

      slide.style.backgroundImage = `url(${background})`;
    });
  }
