const submitBtn = document.querySelector(".btn-1");

submitBtn.addEventListener("click", () => {
  let message = document.querySelector(".message");
  let time = 2000; // 2 seconds

  message.classList.toggle("active");

  setTimeout(() => {
    message.classList.toggle("hidden"); }, time);
});
