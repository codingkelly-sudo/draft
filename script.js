(function () {
  'use strict';

  /* ---------- Sticky header shadow ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 14px rgba(0,0,0,.10)'
      : '0 1px 0 rgba(0,0,0,.07)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mainNav.classList.remove('open'))
  );

  /* ---------- Active nav link on scroll ---------- */
  const sections = ['home','services','process','projects','testimonials','contact'];
  const navLinks = document.querySelectorAll('.main-nav a');
  const setActive = () => {
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ---------- Hero slider ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  let heroIndex = 0;
  let heroTimer;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => { goHero(i); restartHero(); });
    dotsWrap.appendChild(b);
  });
  const heroDots = dotsWrap.querySelectorAll('button');

  function goHero(i) {
    slides[heroIndex].classList.remove('active');
    heroDots[heroIndex].classList.remove('active');
    heroIndex = i;
    slides[heroIndex].classList.add('active');
    heroDots[heroIndex].classList.add('active');
  }
  function nextHero() { goHero((heroIndex + 1) % slides.length); }
  function restartHero() { clearInterval(heroTimer); heroTimer = setInterval(nextHero, 6000); }
  if (slides.length > 1) restartHero();

  /* ---------- Process tabs ---------- */
  const processNav = document.getElementById('processNav');
  const processPanels = document.getElementById('processPanels');
  processNav.addEventListener('click', e => {
    const li = e.target.closest('li[data-tab]');
    if (!li) return;
    const idx = +li.dataset.tab;
    processNav.querySelectorAll('li').forEach((n, i) => n.classList.toggle('active', i === idx));
    processPanels.querySelectorAll('.panel').forEach((p, i) => p.classList.toggle('active', i === idx));
  });

  /* ---------- Portfolio filter ---------- */
  const filters = document.getElementById('filters');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filters.addEventListener('click', e => {
    const a = e.target.closest('a[data-filter]');
    if (!a) return;
    e.preventDefault();
    const filter = a.dataset.filter;
    filters.querySelectorAll('a').forEach(n => n.classList.remove('active'));
    a.classList.add('active');
    galleryItems.forEach(item => {
      const match = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hide', !match);
    });
  });

  /* ---------- Testimonial carousel ---------- */
  const testimonials = document.querySelectorAll('.testimonial');
  const tDotsWrap = document.getElementById('testimonialDots');
  let tIndex = 0;
  let tTimer;

  testimonials.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Testimonial ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => { goTestimonial(i); restartTestimonials(); });
    tDotsWrap.appendChild(b);
  });
  const tDots = tDotsWrap.querySelectorAll('button');

  function goTestimonial(i) {
    testimonials[tIndex].classList.remove('active');
    tDots[tIndex].classList.remove('active');
    tIndex = i;
    testimonials[tIndex].classList.add('active');
    tDots[tIndex].classList.add('active');
  }
  function nextTestimonial() { goTestimonial((tIndex + 1) % testimonials.length); }
  function restartTestimonials() { clearInterval(tTimer); tTimer = setInterval(nextTestimonial, 7000); }
  if (testimonials.length > 1) restartTestimonials();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
})();
