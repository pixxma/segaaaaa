const word = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  word.innerHTML = "click";
  btn.innerHTML = "click";
});
