(function() {
  const version = '0.1 (Test)';
  const updated = '2025.09.02';

  const el = document.getElementById('site-version');
  if (el) {
    el.textContent = `Verzió: ${version} – Frissítve: ${updated}`;
  }
})();
