var backgroundMusic = document.getElementById("backgroundMusic");
var soundIcon = document.getElementById("soundIcon");
var isMuted = false;

soundIcon.addEventListener("click", function() {
  if (isMuted) {
    backgroundMusic.play();
    soundIcon.classList.remove("muted");
    isMuted = false;
  } else {
    backgroundMusic.pause();
    soundIcon.classList.add("muted");
    isMuted = true;
  }
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
});



