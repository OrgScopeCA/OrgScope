document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

/* Append to script.js — handles tap-to-open dropdown on mobile,
   where hover doesn't apply (see nav-dropdown.css breakpoint). */
document.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function (e) {
    if (window.innerWidth <= 880) {
      e.preventDefault();
      this.closest('.nav-dropdown').classList.toggle('is-open');
    }
  });
});