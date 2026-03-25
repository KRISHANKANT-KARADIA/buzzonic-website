const swiper = new Swiper(".myHeroSlider", {
    effect: "fade",
    loop: true,
    speed: 800,

    fadeEffect: {
        crossFade: true, // ⭐ MOST IMPORTANT FIX
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});