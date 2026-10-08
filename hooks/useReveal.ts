'use client';

import { useEffect } from 'react';

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 * Elements already on screen at mount are left untouched.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-reveal', 'visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
      el.setAttribute('data-reveal', 'pending');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
