const swiper2 = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.reviews-swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
new Swiper('.image-slider', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination-products',
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.modal-swiper', {
    pagination: {
        el: '.modal-swiper-pagination',
        clickable:true,
    },
    slidesPerView: 1,
      breakpoints: {
        768: {
            slidesPerView: 3,         
        },
        1200: {
            slidesPerView: 4,          
        }
    }
});
