// js/menu-data.js
window.MENU_DATA = {
  logo: {
    text: "Érettségi Felkészítő",
    href: "index.html"
  },
  links: [
    { text: "Kezdőlap", href: "index.html" },
    {
      text: "Történelem",
      href: "tortenelem/index.html",
      children: [
        { text: "Érettségi", href: "tortenelem/erettsegi/valaszto.html" },
        { text: "Kvíz", href: "tortenelem/kvizek/index.html" }
      ]
    },
    {
      text: "Földrajz",
      href: "foldrajz/index.html",
      children: [
        { text: "Érettségi", href: "foldrajz/erettsegik.html" },
        { text: "Kvíz", href: "foldrajz/kvizek/index.html" }
      ]
    },
    { text: "Kapcsolat", href: "contact.html" }
  ]
};
