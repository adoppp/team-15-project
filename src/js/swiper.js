const swiper2 = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.reviews-swiper-pagination',
        // clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
            // slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 28,
            // slidesPerGroup: 3,
        }
    }
});