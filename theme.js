(function(){
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function setIcon() {
    btn.textContent = document.documentElement.classList.contains('theme-dark') ? '☀️' : '🌙';
  }
  setIcon();
  btn.addEventListener('click', function(){
    document.documentElement.classList.toggle('theme-dark');
    var dark = document.documentElement.classList.contains('theme-dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    setIcon();
  });
})();
