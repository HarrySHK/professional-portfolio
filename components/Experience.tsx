'use client';

import { useState } from 'react';
import { jobs } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import { Plus } from './Icons';
import styles from './Experience.module.css';

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className={`container ${styles.section}`}>
      <SectionHeader index="02" kicker="Experience" title={<>Where I&apos;ve<br />worked</>} />

      <div className={styles.list}>
        {jobs.map((job, i) => {
          const expanded = open === i;
          const panelId = `job-${i}`;
          return (
            <div key={job.company} className={styles.item} data-reveal="">
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span className={styles.period}>{job.period}</span>
                <span className={styles.who}>
                  <span className={styles.company}>{job.company}</span>
                  <span className={styles.role}>{job.role}</span>
                </span>
                <span className={styles.location}>{job.location}</span>
                <span className={`${styles.icon} ${expanded ? styles.iconOpen : ''}`}><Plus size={20} /></span>
              </button>

              {expanded && (
                <div id={panelId} className={styles.panel}>
                  <span className={styles.spacer} />
                  <ul className={styles.points}>
                    {job.points.map((point) => (
                      <li key={point}><span className="square" />{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
