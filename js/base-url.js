(function() {
  // Ha GitHub Pages-en vagyunk, állítsuk be a <base> dinamikusan a repo rootjára.
  if (location.hostname.includes('github.io')) {
    try {
      var base = document.createElement('base');
      var path = location.pathname || '/';
      // path lehet '/repo/' vagy '/repo/page.html' — kivesszük a '/repo/' részt
      var match = path.match(/^\/[^\/]+\/?/);
      var baseHref = location.origin + (match ? match[0] : '/');
      if (!baseHref.endsWith('/')) baseHref += '/';
      base.href = baseHref;
      document.head.appendChild(base);
    } catch(e) {
      console.error('base-url.js hiba:', e);
    }
  }
})();