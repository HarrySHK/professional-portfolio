'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Project } from '@/data/portfolio';
import { Pause, Play, Restart } from './Icons';
import styles from './Explainer.module.css';

interface Props {
  project: Project;
  sceneMs: number;
  active: boolean;
}

/** Scene-by-scene motion walkthrough of a project's architecture. */
export default function Explainer({ project, sceneMs, active }: Props) {
  const total = project.scenes.length;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  // Bumped on manual navigation so the auto-advance timer restarts from zero.
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    setStep(0);
    setPlaying(true);
    setEpoch((e) => e + 1);
  }, [project.slug]);

  useEffect(() => {
    if (!active || !playing) return;
    const id = setInterval(() => setStep((s) => (s + 1) % total), sceneMs);
    return () => clearInterval(id);
  }, [active, playing, sceneMs, total, epoch]);

  const go = useCallback((i: number) => {
    setStep(((i % total) + total) % total);
    setEpoch((e) => e + 1);
  }, [total]);

  const togglePlay = useCallback(() => {
    setPlaying((p) => !p);
    setEpoch((e) => e + 1);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(step + 1);
      else if (e.key === 'ArrowLeft') go(step - 1);
      else if (e.key === ' ') { e.preventDefault(); togglePlay(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, step, go, togglePlay]);

  const scene = project.scenes[Math.min(step, total - 1)];
  const progress = `${((step + 0.5) / total) * 100}%`;

  return (
    <div className={styles.player}>
      <div className={styles.header}>
        <span className={styles.live}><span className={`square blink ${styles.dot}`} />Motion explainer</span>
        <span className={styles.counter}>Scene {step + 1} / {total}</span>
      </div>

      <div className={styles.stage}>
        <div key={`${project.slug}-${step}`} className={styles.caption}>
          <span className={styles.sceneLabel}>0{step + 1} — {scene.label}</span>
          <p className={styles.sceneText}>{scene.caption}</p>
        </div>

        <div className={styles.diagram}>
          <div className={styles.rail} />
          <div className={styles.railFill} style={{ width: progress }} />
          <div className={styles.packet} style={{ left: progress }} />
          <div className={styles.nodes} style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
            {project.scenes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => go(i)}
                aria-current={i === step ? 'step' : undefined}
                className={`${styles.node} ${i < step ? styles.done : ''} ${i === step ? styles.current : ''}`}
              >
                <span className={styles.nodeIdx}>0{i + 1}</span>
                <span className={styles.nodeText}>
                  <span className={styles.nodeLabel}>{s.label}</span>
                  <span className={styles.nodeTech}>{s.tech}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className="btn btn-secondary btn-icon" aria-label={playing ? 'Pause' : 'Play'} onClick={togglePlay}>
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button type="button" className="btn btn-secondary btn-icon" aria-label="Restart" onClick={() => go(0)}>
          <Restart size={16} />
        </button>
        <div className={styles.segments}>
          {project.scenes.map((s, i) => (
            <button key={s.label} type="button" className={styles.segment} onClick={() => go(i)} aria-label={`Go to scene ${i + 1}`}>
              <span
                key={`${epoch}-${step}-${playing}`}
                className={styles.segmentFill}
                style={
                  i < step
                    ? { width: '100%' }
                    : i === step && playing && active
                      ? { animation: `fill ${sceneMs}ms linear forwards` }
                      : i === step
                        ? { width: '50%' }
                        : undefined
                }
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
