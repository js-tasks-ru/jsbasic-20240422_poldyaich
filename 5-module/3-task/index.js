function initCarousel() {
  const carousel = document.querySelector(".carousel__inner");
  const rightArrow = document.querySelector(".carousel__arrow_right");
  const leftArrow = document.querySelector(".carousel__arrow_left");
  const slides = document.querySelectorAll(".carousel__slide");
  const totalSlides = slides.length;
  const slideWidth = carousel.offsetWidth;

  let currentSlide = 0;

  leftArrow.style.display = "none";

  function updateCarousel() {
    const offset = -currentSlide * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    if (currentSlide === 0) {
      leftArrow.style.display = "none";
    } else {
      leftArrow.style.display = "";
    }

    if (currentSlide === totalSlides - 1) {
      rightArrow.style.display = "none";
    } else {
      rightArrow.style.display = "";
    }
  }

  rightArrow.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  leftArrow.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  updateCarousel();
}
