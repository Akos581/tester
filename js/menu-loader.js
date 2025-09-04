(function() {
  // Dinamikusan szerezzük meg a base path-et, ha van <base> elem
  function getBaseHref() {
    var baseEl = document.querySelector('base');
    if (baseEl) {
      var b = baseEl.getAttribute('href') || '';
      if (!b.endsWith('/')) b += '/';
      return b;
    }
    return null;
  }
  const BASE_HREF = getBaseHref(); // lehet null

  // Aktuális oldal kiemelése — resolved összevetésnél használjuk a BASE_HREF-et ha van
  const currentPath = (new URL(location.href)).pathname.replace(/\/$/, '/index.html');

  document.addEventListener("DOMContentLoaded", () => {
    // Menü linkek kiemelése
    document.querySelectorAll('#header a').forEach(a => {
      try {
        const href = a.getAttribute('href') || '';
        const baseForResolve = BASE_HREF ? BASE_HREF : location.href;
        const resolved = new URL(href, baseForResolve).pathname.replace(/\/$/, '/index.html');
        if (resolved === currentPath) {
          a.setAttribute('aria-current', 'page');
        }
      } catch(e) {}
    });

    // Menü nyit/zár gomb
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }

    // Téma váltás script betöltése
    const themeScript = document.createElement('script');
    themeScript.src = BASE_HREF ? (BASE_HREF + 'js/theme.js') : 'js/theme.js';
    document.body.appendChild(themeScript);

    // Visszaszámláló script betöltése
    const countdownScript = document.createElement('script');
    countdownScript.src = BASE_HREF ? (BASE_HREF + 'js/countdown.js') : 'js/countdown.js';
    countdownScript.onload = () => {
      if (window.initExamCountdown) {
        window.initExamCountdown();
      }
    };
    document.body.appendChild(countdownScript);
  });
})();