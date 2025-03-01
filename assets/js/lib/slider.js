const slider = document.getElementById("slider");
const sliderContents = slider.querySelectorAll(".sliderContent");
const btnCloseSlider = slider.querySelectorAll(".btn-closeSlider");

btnCloseSlider.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent  = e.target.closest(".sliderContent");
    parent.classList.remove("is-show");
  })
})