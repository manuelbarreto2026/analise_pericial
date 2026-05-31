(function () {
  var btn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
})();

(function () {
  var nav = document.querySelector('.main-nav');
  var burger = document.getElementById('navHamburger');
  if (!nav || !burger) return;

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
