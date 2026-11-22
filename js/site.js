// Mobile nav toggle
document.addEventListener("click", function (e) {
  var t = e.target.closest(".nav-toggle");
  if (!t) return;
  var nav = document.getElementById("site-nav");
  var open = nav.classList.toggle("open");
  t.setAttribute("aria-expanded", String(open));
});

// Looping videos: start them explicitly. Some iPhone states (Low Power Mode,
// Low Data Mode) block autoplay; in that case they start on the visitor's
// first tap or key press, which iOS treats as permission to play.
(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll("video[autoplay]"));
  if (!videos.length) return;

  function tryPlay(v) {
    v.muted = true;
    v.playsInline = true;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  function playPaused() {
    videos.forEach(function (v) { if (v.paused) tryPlay(v); });
  }

  videos.forEach(tryPlay);
  ["touchend", "click", "keydown"].forEach(function (ev) {
    document.addEventListener(ev, playPaused, { passive: true });
  });
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) playPaused();
  });
})();
