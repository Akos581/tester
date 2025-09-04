(function() {
  const REPO_NAME = "erettsegi"; // <-- IDE írd a saját repo nevét!
  const BASE_PATH = `/${REPO_NAME}/`;

  // Aktuális oldal kiemelése
  const currentPath = location.pathname.replace(/\/$/, '/index.html');

  document.addEventListener("DOMContentLoaded", () => {
    // Menü linkek kiemelése
    document.querySelectorAll('#header a').forEach(a => {
      try {
        const href = a.getAttribute('href') || '';
        const resolved = new URL(href, location.origin).pathname.replace(/\/$/, '/index.html');
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
    themeScript.src = BASE_PATH + 'js/theme.js';
    document.body.appendChild(themeScript);

    // Visszaszámláló script betöltése
    const countdownScript = document.createElement('script');
    countdownScript.src = BASE_PATH + 'js/countdown.js';
    countdownScript.onload = () => {
      if (window.initExamCountdown) {
        window.initExamCountdown();
      }
    };
    document.body.appendChild(countdownScript);
  });
})();
