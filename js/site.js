// Mobile nav toggle
document.addEventListener("click", function (e) {
  var t = e.target.closest(".nav-toggle");
  if (!t) return;
  var nav = document.getElementById("site-nav");
  var open = nav.classList.toggle("open");
  t.setAttribute("aria-expanded", String(open));
});
