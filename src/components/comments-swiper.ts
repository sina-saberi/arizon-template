import Swiper from "swiper";

const lenght = document.querySelectorAll('.comments-swiper .swiper-slide').length;
new Swiper(".comments-swiper", {
    direction: "vertical",
    slidesPerView: Math.min(3, lenght),
    spaceBetween: 20,

})