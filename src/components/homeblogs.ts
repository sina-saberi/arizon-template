import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

new Swiper('.blog-swiper', {
    modules: [Autoplay, Navigation, Pagination],
    direction: "horizontal",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: "!bg-gray-300"
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});