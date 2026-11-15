(function () {
  var root = document.documentElement;
  var KEY = 'wl-theme';
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function stored() {
    var forced = new URLSearchParams(window.location.search).get('theme');
    if (forced === 'light' || forced === 'dark') return forced;
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1118' : '#f6f3ed');
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i += 1) {
      var b = buttons[i];
      b.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      var label = b.querySelector('[data-theme-label]');
      if (label) label.textContent = theme === 'dark' ? b.getAttribute('data-label-dark') : b.getAttribute('data-label-light');
    }
  }

  apply(stored() || (media.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-theme') || 'light');
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
      });
    }
  });

  var onChange = function (e) { if (!stored()) apply(e.matches ? 'dark' : 'light'); };
  if (media.addEventListener) media.addEventListener('change', onChange);
  else if (media.addListener) media.addListener(onChange);
})();
