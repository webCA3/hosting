//Author: Sebastian Konefal student No. 21197458

// full descirption of paramaters are at https://swiperjs.com/swiper-api
var swiper = new Swiper(".review-slider", {

  loop: true, //looping through the slides
  spaceBetween: 20, // distance between slides
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
      //Responsive breakpoints for screen sizes
      breakpoints: {
          //window width is <= 640
      640: {
        slidesPerView: 1,
      },
      //window width is <= 768
      768: {
        slidesPerView: 2,
      },
      //window width is <= 1024
      1024: {
        slidesPerView: 3,
      },
  },
})
