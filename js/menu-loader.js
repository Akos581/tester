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

  // Normalizálás: '/path/' -> '/path/index.html'
  function normalizePath(pathname) {
    return pathname.replace(/\/$/, '/index.html');
  }
  // Aktuális oldal teljes pathname
  const currentPath = normalizePath((new URL(location.href)).pathname);

  document.addEventListener("DOMContentLoaded", () => {
    // Menü linkek kiemelése, mélyre ható: ha belső linket találunk, megnézzük,
    // melyik a pontos match és minden szülőt "open"-nel jelölünk.
    document.querySelectorAll('#header a').forEach(a => {
      try {
        // használjuk a link resolved verzióját ha elérhető (absolute URL)
        const resolvedHref = a.dataset.resolvedHref || a.getAttribute('href') || '';
        // A resolvedHref egy teljes URL, normalizáljuk a pathname-t belőle
        const resolvedPathname = normalizePath((new URL(resolvedHref, location.href)).pathname);

        if (resolvedPathname === currentPath) {
          a.setAttribute('aria-current', 'page');

          // Minden ancestor .dropdown-t nyissunk ki és jelöljük aktívnak
          let node = a;
          while (node) {
            const dropdown = node.closest('.dropdown');
            if (!dropdown) break;
            dropdown.classList.add('open', 'active');
            const parentLink = dropdown.querySelector('.dropdown-parent');
            if (parentLink) parentLink.setAttribute('aria-expanded', 'true');
            node = dropdown.parentElement;
          }
        }
      } catch(e) {
        // Ignore invalid URLs
      }
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

    // Téma váltás script betöltése (BASE_HREF figyelembevételével)
    const themeScript = document.createElement('script');
    themeScript.src = BASE_HREF ? (BASE_HREF + 'js/theme.js') : 'js/theme.js';
    document.body.appendChild(themeScript);

    // Visszaszámláló script betöltése (BASE_HREF figyelembevételével)
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