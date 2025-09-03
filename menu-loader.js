(function() {
  // Aktuális oldal kiemelése
  const currentPath = location.pathname.replace(/\/$/, '/index.html');
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('#header a').forEach(a => {
      try {
        const href = a.getAttribute('href') || '';
        const resolved = new URL(href, location.href).pathname.replace(/\/$/, '/index.html');
        if (resolved === currentPath) a.setAttribute('aria-current', 'page');
      } catch(e) {}
    });

    // Menü nyit/zár
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }

    // Téma váltás script
    const themeScript = document.createElement('script');
    themeScript.src = 'js/theme.js';
    document.body.appendChild(themeScript);

    // Visszaszámláló script
    const countdownScript = document.createElement('script');
    countdownScript.src = 'js/countdown.js';
    countdownScript.onload = () => {
      if (window.initExamCountdown) window.initExamCountdown();
    };
    document.body.appendChild(countdownScript);
  });
})();
