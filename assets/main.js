// SREE ENGINEERING - MEPF build. Nav shadow, mobile menu, scroll reveal.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 8) { nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var burger = document.getElementById('burger'), mm = document.getElementById('mobileMenu');
  if (burger && mm) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      mm.classList.toggle('open');
    });
    mm.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('open');
        mm.classList.remove('open');
      });
    });
  }
  var revs = document.querySelectorAll('.reveal');
  if (revs.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      revs.forEach(function (el) { io.observe(el); });
    } else {
      revs.forEach(function (el) { el.classList.add('in'); });
    }
  }
  var yr = document.getElementById('yr');
  if (yr) { yr.textContent = new Date().getFullYear(); }
});
