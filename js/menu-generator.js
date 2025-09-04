(function() {
  if (!window.MENU_DATA) {
    console.error("MENU_DATA nem található!");
    return;
  }

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

  function resolveHref(href) {
    if (/^https?:\/\//i.test(href)) return href;
    if (BASE_HREF) {
      try {
        return new URL(href, BASE_HREF).href;
      } catch (e) {}
    }
    try {
      return new URL(href, location.origin + '/').href;
    } catch (e) {
      return href;
    }
  }

  const menu = window.MENU_DATA;

  function createLinkObj(link) {
    const a = document.createElement("a");
    a.textContent = link.text;
    const resolved = resolveHref(link.href);
    a.setAttribute('href', resolved);
    a.dataset.rawHref = link.href;
    a.dataset.resolvedHref = resolved;
    return a;
  }

  function createMenuItem(item) {
    if (item.children && item.children.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "dropdown";

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

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "menu-toggle";
    toggleBtn.id = "menu-toggle";
    toggleBtn.setAttribute("aria-label", "Menü megnyitása");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.textContent = "☰";
    nav.appendChild(toggleBtn);

    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    logoDiv.appendChild(createLinkObj(menu.logo));
    nav.appendChild(logoDiv);

    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";
    navLinks.id = "nav-links";

    menu.links.forEach(item => {
      navLinks.appendChild(createMenuItem(item));
    });
    nav.appendChild(navLinks);

    const countdownDiv = document.createElement("div");
    countdownDiv.className = "exam-countdown";
    countdownDiv.id = "exam-countdown";
    countdownDiv.setAttribute("aria-live", "polite");
    nav.appendChild(countdownDiv);

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