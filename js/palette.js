// Palette exploration: applies the chosen blue-grey palette site-wide and
// renders a small switcher in the corner. Remove this script (and the
// .palette-switcher CSS) once a palette is settled into :root in style.css.
(function () {
  var PALETTES = {
    slate: "#3d4b5c",
    steel: "#4a6177",
    storm: "#2c3a4a",
    dusk: "#56657a"
  };
  var KEY = "ppf-palette";
  var root = document.documentElement;

  var fromUrl = new URLSearchParams(location.search).get("palette");
  if (fromUrl && PALETTES[fromUrl]) localStorage.setItem(KEY, fromUrl);
  var current = localStorage.getItem(KEY);
  if (!PALETTES[current]) current = "slate";
  root.setAttribute("data-palette", current);

  function apply(name) {
    current = name;
    localStorage.setItem(KEY, name);
    root.setAttribute("data-palette", name);
    document.querySelectorAll(".palette-switcher button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.palette === name));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.createElement("div");
    bar.className = "palette-switcher";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "Accent palette");
    bar.appendChild(document.createTextNode("Palette"));
    Object.keys(PALETTES).forEach(function (name) {
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.palette = name;
      b.title = name;
      b.setAttribute("aria-label", name);
      b.style.background = PALETTES[name];
      b.setAttribute("aria-pressed", String(name === current));
      b.addEventListener("click", function () { apply(name); });
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
  });
})();
