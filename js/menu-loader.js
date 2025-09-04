(function() {
  function getBaseHref() {
    if (window.SITE_BASE) {
      var b = window.SITE_BASE;
      if (!b.endsWith('/')) b += '/';
      return b;
    }
    var baseEl = document.querySelector('base');
    if (baseEl) {
      var b = baseEl.getAttribute('href') || '';
      if (!b.endsWith('/')) b += '/';
      return b;
    }
    return null;
  }
  const BASE_HREF = getBaseHref();

  function normalizePath(pathname) {
    return pathname.replace(/\/$/, '/index.html');
  }
  const currentPath = normalizePath((new URL(location.href)).pathname);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('#header a').forEach(a => {
      try {
        const resolvedHref = a.dataset.resolvedHref || a.getAttribute('href') || '';
        const resolvedPathname = normalizePath((new URL(resolvedHref, location.href)).pathname);

        if (resolvedPathname === currentPath) {
          a.setAttribute('aria-current', 'page');

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
      } catch(e) {}
    });

    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }

    const themeScript = document.createElement('script');
    themeScript.src = BASE_HREF ? (BASE_HREF + 'js/theme.js') : 'js/theme.js';
    document.body.appendChild(themeScript);

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