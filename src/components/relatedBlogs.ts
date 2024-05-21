import Swiper from "swiper";

new Swiper(".related-blogs", {
    spaceBetween: 30,
    breakpoints: {
        384: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    }
});