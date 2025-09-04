(function() {
  if (!window.MENU_DATA) {
    console.error("MENU_DATA nem található!");
    return;
  }

  // Ha van <base>, használjuk azt feloldáshoz, különben null
  function getBaseHref() {
    var baseEl = document.querySelector('base');
    if (baseEl) {
      var b = baseEl.getAttribute('href') || '';
      if (!b.endsWith('/')) b += '/';
      return b;
    }
    return null;
  }
  var BASE_HREF = getBaseHref();

  const menu = window.MENU_DATA;

  function resolveHref(href) {
    // Ha teljes URL-ről van szó, hagyjuk
    if (/^https?:\/\//i.test(href)) return href;

    // Ha van base (GitHub Pages esetén), oldjuk fel arra
    if (BASE_HREF) {
      try {
        return new URL(href, BASE_HREF).href;
      } catch (e) { /* fallthrough */ }
    }

    // Lokális eset: oldjuk fel a szerver gyökeréhez képest (location.origin + '/')
    try {
      return new URL(href, location.origin + '/').href;
    } catch (e) {
      // Ha minden kötél szakad, térjünk vissza nyers href-cel
      return href;
    }
  }

  function createLinkObj(link) {
    const a = document.createElement("a");
    a.textContent = link.text;
    const resolved = resolveHref(link.href);
    a.setAttribute('href', resolved);
    // tároljuk az eredeti href-et későbbi összehasonlításhoz
    a.dataset.rawHref = link.href;
    a.dataset.resolvedHref = resolved;
    return a;
  }

  // Rekurzív menüpont-építő: lehet közvetlen link, vagy dropdown (gyermekekkel)
  function createMenuItem(item) {
    if (item.children && item.children.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "dropdown";

      // A szülő link
      const parent = createLinkObj(item);
      parent.classList.add('dropdown-parent');
      wrapper.appendChild(parent);

      const content = document.createElement("div");
      content.className = "dropdown-content";

      item.children.forEach(child => {
        content.appendChild(createMenuItem(child));
      });

      wrapper.appendChild(content);
      return wrapper;
    } else {
      return createLinkObj(item);
    }
  }

  function buildMenuHTML() {
    const header = document.createElement("header");
    header.className = "site-header";

    const nav = document.createElement("nav");
    nav.className = "site-nav";

    // Menü gomb
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "menu-toggle";
    toggleBtn.id = "menu-toggle";
    toggleBtn.setAttribute("aria-label", "Menü megnyitása");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.textContent = "☰";
    nav.appendChild(toggleBtn);

    // Logo
    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    logoDiv.appendChild(createLinkObj(menu.logo));
    nav.appendChild(logoDiv);

    // Linkek (rekurzívan)
    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";
    navLinks.id = "nav-links";

    menu.links.forEach(item => {
      navLinks.appendChild(createMenuItem(item));
    });
    nav.appendChild(navLinks);

    // Countdown
    const countdownDiv = document.createElement("div");
    countdownDiv.className = "exam-countdown";
    countdownDiv.id = "exam-countdown";
    countdownDiv.setAttribute("aria-live", "polite");
    nav.appendChild(countdownDiv);

    // Téma váltó
    const themeBtn = document.createElement("button");
    themeBtn.className = "theme-toggle";
    themeBtn.id = "theme-toggle";
    themeBtn.setAttribute("aria-label", "Téma váltás");
    themeBtn.title = "Téma váltás";
    themeBtn.textContent = "🌙";
    nav.appendChild(themeBtn);

    header.appendChild(nav);
    return header;
  }

  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.appendChild(buildMenuHTML());
  }
})();