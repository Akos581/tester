(function() {
  if (location.hostname.includes('github.io')) {
    var base = document.createElement('base');
    base.href = 'https://akos581.github.io/tester/';
    document.head.appendChild(base);
  }
})();
