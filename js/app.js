let a = document.querySelector("#switch");
a.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dark");
});
