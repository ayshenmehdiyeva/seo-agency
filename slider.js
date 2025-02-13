var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const menu = document.querySelector(".sidemenu");
  const showBtn = document.getElementById("showBtn");
  const showed = document.getElementById("show");
  const closeBtn = document.getElementById("closeBtn");

  showBtn.addEventListener("click", function () {
      menu.classList.add("display")
  });
  showed.addEventListener("click", function () {
    menu.classList.add("display")
});

  closeBtn.addEventListener("click", function () {
      menu.classList.remove("display")

  });
