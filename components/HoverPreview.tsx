'use client';

import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/portfolio';
import styles from './HoverPreview.module.css';

const WIDTH = 340;
const EASE = 0.14;

interface Props {
  project: Project | null;
  enabled: boolean;
}

/** Card that trails the cursor while a project row is hovered. Pointer devices only. */
export default function HoverPreview({ project, enabled }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [last, setLast] = useState<Project | null>(project);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    if (project) setLast(project);
  }, [project]);

  useEffect(() => {
    setFinePointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!finePointer) return;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const loop = () => {
      pos.x += (target.x - pos.x) * EASE;
      pos.y += (target.y - pos.y) * EASE;
      const el = ref.current;
      if (el) {
        const x = Math.min(pos.x + 24, window.innerWidth - WIDTH - 16);
        const y = Math.min(pos.y + 24, window.innerHeight - el.offsetHeight - 16);
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [finePointer]);

  if (!finePointer || !last) return null;
  const visible = enabled && project !== null;

  return (
    <div ref={ref} className={styles.anchor} aria-hidden="true">
      <div className={`${styles.card} ${visible ? styles.visible : ''}`}>
        <div className={styles.top}>
          <span>{last.category}</span>
          <span>{last.year}</span>
        </div>
        <div className={styles.name}>{last.name}</div>
        <div className={styles.track}><span className={styles.packet} /></div>
        <ol className={styles.scenes}>
          {last.scenes.map((s, i) => (
            <li key={s.label}><span className={styles.idx}>0{i + 1}</span>{s.label}</li>
          ))}
        </ol>
        <div className={styles.top}>Click to play explainer</div>
      </div>
    </div>
  );
}
