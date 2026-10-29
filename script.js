document.querySelectorAll(".badge[data-tip]").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = btn.classList.contains("show");
    document.querySelectorAll(".badge.show").forEach(function (b) {
      b.classList.remove("show");
    });
    if (!isOpen) btn.classList.add("show");
  });
});
document.addEventListener("click", function () {
  document.querySelectorAll(".badge.show").forEach(function (b) {
    b.classList.remove("show");
  });
});

/* flip cards */
document.querySelectorAll(".dish.flip").forEach(function (card) {
  function toggle() {
    var on = card.classList.toggle("flipped");
    card.setAttribute("aria-pressed", on);
  }
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", function (e) {
    if (e.target !== card) return; // ignore keys on the badge button
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
  /* use each photo as its own blurred backdrop */
  document.querySelectorAll(".face.back").forEach(function (face) {
    var img = face.querySelector("img");
    if (img)
      face.style.backgroundImage = 'url("' + img.getAttribute("src") + '")';
  });
});
