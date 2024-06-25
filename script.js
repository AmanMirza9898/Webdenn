const hamberger = document.querySelector("#hamberger");
const active_class = document.querySelector("#active_class");

hamberger.addEventListener('click',()=>{
    active_class.classList.toggle("hidden");
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

