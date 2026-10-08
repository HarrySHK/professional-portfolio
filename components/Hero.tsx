'use client';

import { useEffect, useState } from 'react';
import { facts, profile, rotatingWords } from '@/data/portfolio';
import { ArrowDown } from './Icons';
import styles from './Hero.module.css';

export default function Hero({ loaded }: { loaded: boolean }) {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % rotatingWords.length), 2400);
    return () => clearInterval(id);
  }, []);

  const [first, last] = profile.lastName;

  return (
    <section className={`container ${styles.hero} ${loaded ? styles.loaded : ''}`}>
      <div className={styles.meta}>
        <span className="kicker">{profile.title} — {profile.location}</span>
        <span className="label">Portfolio 2023 — 2026</span>
      </div>

      <h1 className={styles.name}>
        <span className={styles.mask}><span className={styles.line}>{profile.firstName}</span></span>
        <span className={styles.mask}>
          <span className={styles.line} style={{ transitionDelay: '0.18s' }}>
            {first} <span className={styles.accent}>{last}</span>
          </span>
        </span>
      </h1>

      <div className={styles.intro}>
        <p className={styles.rotator}>
          <span>I build</span>
          <span className={styles.window}>
            <span className={styles.words} style={{ transform: `translateY(-${word * 1.08}em)` }}>
              {rotatingWords.map((w) => (
                <span key={w} className={styles.word}>{w}</span>
              ))}
            </span>
          </span>
        </p>
        <div className={styles.copy}>
          <p className={styles.lede}>{profile.intro}</p>
          <div className={styles.actions}>
            <a href="#work" className="btn btn-primary" style={{ minWidth: 180 }}>
              See selected work <ArrowDown size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-secondary">{profile.email}</a>
          </div>
        </div>
      </div>

      <div className={styles.facts}>
        {facts.map((f) => (
          <div key={f.label} className={styles.fact} data-reveal="">
            <span className={styles.factValue}>{f.value}</span>
            <span className="label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
