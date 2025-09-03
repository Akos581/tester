// js/countdown.js
(function () {
  function updateCountdown(targetId, targetDate) {
    var el = document.getElementById(targetId);
    if (!el) return;

    var now = new Date();

    // Számolás nap pontossággal, időzóna/óraváltás villanások nélkül:
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var exam = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

    var msPerDay = 24 * 60 * 60 * 1000;
    var diffDays = Math.ceil((exam - today) / msPerDay);
    if (diffDays < 0) diffDays = 0;

    el.textContent = diffDays === 0
      ? 'Ma kezdődik az érettségi'
      : diffDays + ' nap az érettségiig';
  }

  // Globális init, hogy az index.html hívhassa betöltés után
  window.initExamCountdown = function () {
    // Őszi írásbeli kezdete: 2025. október 10. (Figyelem: hónap 0-indexelt → 9 = október)
    var target = new Date(2025, 10, 10);

    updateCountdown('exam-countdown', target);

    // Frissítés minden éjfélkor, hogy a napok száma magától csökkenjen
    var now = new Date();
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var msToMidnight = midnight - now;

    setTimeout(function tick() {
      updateCountdown('exam-countdown', target);
      setTimeout(tick, 24 * 60 * 60 * 1000);
    }, msToMidnight);
  };
})();
