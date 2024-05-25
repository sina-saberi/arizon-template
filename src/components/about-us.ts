import Swiper from "swiper";

new Swiper(".about-swiper", {
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        1000: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1280: {
            spaceBetween: 20,
            slidesPerView: 4,
        }
    }
})