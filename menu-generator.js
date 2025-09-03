(function() {
  if (!window.MENU_DATA) {
    console.error("MENU_DATA nem található!");
    return;
  }

  // --- Újdonság: dinamikus basePath számítás ---
  const depth = location.pathname.split('/').filter(Boolean).length - 1;
  const basePath = depth > 0 ? '../'.repeat(depth) : '';

  const menu = window.MENU_DATA;

  function createLink(link) {
    const a = document.createElement("a");
    a.textContent = link.text;
    // --- Újdonság: minden href elé odatesszük a basePath-et ---
    a.href = basePath + link.href;
    return a;
  }

  function createDropdown(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "dropdown";
    wrapper.appendChild(createLink(item));

    if (item.children && item.children.length) {
      const dropdownContent = document.createElement("div");
      dropdownContent.className = "dropdown-content";
      item.children.forEach(child => dropdownContent.appendChild(createLink(child)));
      wrapper.appendChild(dropdownContent);
    }
    return wrapper;
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
    logoDiv.appendChild(createLink(menu.logo));
    nav.appendChild(logoDiv);

    // Linkek
    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";
    navLinks.id = "nav-links";

    menu.links.forEach(item => {
      if (item.children) {
        navLinks.appendChild(createDropdown(item));
      } else {
        navLinks.appendChild(createLink(item));
      }
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
