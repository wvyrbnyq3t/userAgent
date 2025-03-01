// カルーセルの子要素の個数
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    // 子要素(.carousel-item)の個数
    const children = carousel.querySelectorAll(".carousel-item").length;
    carousel.setAttribute("style", `--i: ${children}`);
  });
});
