const popup = document.getElementById("popup");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  // class から hide をなくす
  popup.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
  // class に add をつける
  popup.classList.add("hide");
});
