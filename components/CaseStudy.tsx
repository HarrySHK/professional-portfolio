'use client';

import { useEffect, useRef, useState } from 'react';
import { pad, projects } from '@/data/portfolio';
import Explainer from './Explainer';
import { ArrowLeft, ArrowRight, Close } from './Icons';
import styles from './CaseStudy.module.css';

interface Props {
  index: number | null;
  onClose: () => void;
  onNavigate: (delta: number) => void;
  sceneMs: number;
}

export default function CaseStudy({ index, onClose, onNavigate, sceneMs }: Props) {
  const open = index !== null;
  // Keep showing the last project while the panel slides out.
  const [shown, setShown] = useState(index ?? 0);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === null) return;
    setShown(index);
    panelRef.current?.scrollTo({ top: 0 });
  }, [index]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const project = projects[shown];
  const next = projects[(shown + 1) % projects.length];

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      aria-hidden={!open}
      className={`${styles.panel} ${open ? styles.open : ''}`}
    >
      <div className={styles.bar}>
        <span className={styles.counter}>{pad(shown + 1)} / {pad(projects.length)}</span>
        <span className={styles.company}>{project.company}</span>
        <button type="button" className="btn btn-secondary btn-icon" aria-label="Previous project" onClick={() => onNavigate(-1)}>
          <ArrowLeft />
        </button>
        <button type="button" className="btn btn-secondary btn-icon" aria-label="Next project" onClick={() => onNavigate(1)}>
          <ArrowRight />
        </button>
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Close <Close size={16} />
        </button>
      </div>

      <div className={`container ${styles.body}`}>
        <header className={styles.head}>
          <span className="kicker">{project.category} — {project.year}</span>
          <h2 className={styles.title}>{project.name}</h2>
        </header>

        <Explainer project={project} sceneMs={sceneMs} active={open} />

        <div className={styles.details}>
          <dl className={styles.facts}>
            <div><dt className="label">Company</dt><dd>{project.company}</dd></div>
            <div><dt className="label">Role</dt><dd>{project.role}</dd></div>
            <div><dt className="label">Year</dt><dd>{project.year}</dd></div>
          </dl>
          <div className={styles.block}>
            <span className="label">What I built</span>
            <p className={styles.summary}>{project.summary}</p>
          </div>
          <div className={styles.block}>
            <span className="label">Stack</span>
            <div className={styles.chips}>
              {project.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        <button type="button" className={styles.next} onClick={() => onNavigate(1)}>
          <span className={styles.nextText}>
            <span className="label">Next project</span>
            <span className={styles.nextName}>{next.name}</span>
          </span>
          <ArrowRight size={40} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
