// Mobile nav toggle
document.addEventListener("click", function (e) {
  var t = e.target.closest(".nav-toggle");
  if (!t) return;
  var nav = document.getElementById("site-nav");
  var open = nav.classList.toggle("open");
  t.setAttribute("aria-expanded", String(open));
});

// Respect reduced-motion preferences: stop looping videos and show their poster frame.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
      v.currentTime = 0;
    });
  });
}
