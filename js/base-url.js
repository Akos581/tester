(function() {
  try {
    // Ha GitHub Pages-en vagyunk, állítsuk be a site gyökér (repo) URL-jét SITE_BASE-ként
    if (location.hostname.includes('github.io')) {
      var path = location.pathname || '/';
      // kivesszük a /repo/ részt (pl. /tester/ vagy /username.github.io/ esetén '/')
      var match = path.match(/^\/[^\/]+\/?/);
      var baseHref = location.origin + (match ? match[0] : '/');
      if (!baseHref.endsWith('/')) baseHref += '/';
      window.SITE_BASE = baseHref;
    } else {
      // lokális fejlesztésnél feltételezzük, hogy a szerver a projekt gyökérét szolgálja ki
      window.SITE_BASE = '/';
    }
  } catch (e) {
    // fallback
    window.SITE_BASE = '/';
  }
})();