'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { projects, settings } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import Loader from './Loader';
import Nav from './Nav';
import Hero from './Hero';
import Marquee from './Marquee';
import Work from './Work';
import Experience from './Experience';
import Stack from './Stack';
import Education from './Education';
import Contact from './Contact';
import CaseStudy from './CaseStudy';

export default function Portfolio() {
  const [loaded, setLoaded] = useState(!settings.showLoader);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const el = progressRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLoaded = useCallback(() => setLoaded(true), []);
  const closeCaseStudy = useCallback(() => setOpenIndex(null), []);

  const navigate = useCallback((delta: number) => {
    setOpenIndex((i) => (i === null ? i : (i + delta + projects.length) % projects.length));
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 80,
          background: 'var(--color-accent)', transform: 'scaleX(0)', transformOrigin: '0 50%',
        }}
      />
      {settings.showLoader && <Loader onDone={handleLoaded} />}
      <Nav />
      <main id="top">
        <Hero loaded={loaded} />
        <Marquee />
        <Work onOpen={setOpenIndex} previewEnabled={settings.hoverPreview && openIndex === null} />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <CaseStudy
        index={openIndex}
        onClose={closeCaseStudy}
        onNavigate={navigate}
        sceneMs={settings.sceneSeconds * 1000}
      />
    </>
  );
}
