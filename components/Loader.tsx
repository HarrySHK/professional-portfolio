'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';
import styles from './Loader.module.css';

const DURATION = 1500;

export default function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let raf = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const start = performance.now();

    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / DURATION);
      setCount(Math.round((1 - Math.pow(1 - k, 3)) * 100));
      if (k < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      timers.push(setTimeout(() => setExiting(true), 200));
      timers.push(setTimeout(onDone, 450));
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [onDone]);

  return (
    <div className={`${styles.loader} ${exiting ? styles.exit : ''}`} aria-hidden="true">
      <div className={styles.top}>
        <span>{profile.name}</span>
        <span>Portfolio — 2026</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>{profile.title}</div>
        <div className={styles.count}>{String(count).padStart(3, '0')}</div>
      </div>
    </div>
  );
}
