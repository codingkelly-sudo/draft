import { useEffect, useState } from 'react';

export default function NavScroll() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById('siteHeader');
    const backToTop = document.getElementById('backToTop');
    const navToggle = document.getElementById('navToggle');

    const handleScroll = () => {
      if (header) {
        header.style.boxShadow = window.scrollY > 10
          ? '0 2px 14px rgba(0,0,0,.10)'
          : '0 1px 0 rgba(255,255,255,.05)';
      }
      if (backToTop) {
        backToTop.classList.toggle('show', window.scrollY > 400);
      }
    };

    const handleToggle = () => setMenuOpen((prev) => !prev);

    window.addEventListener('scroll', handleScroll, { passive: true });
    navToggle?.addEventListener('click', handleToggle);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navToggle?.removeEventListener('click', handleToggle);
    };
  }, []);

  useEffect(() => {
    const nav = document.getElementById('mainNav');
    if (nav) {
      nav.classList.toggle('open', menuOpen);
    }
  }, [menuOpen]);

  return null;
}