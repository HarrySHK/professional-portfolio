'use client';

import { useMemo, useState } from 'react';
import { filters, pad, projects, type Category } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import HoverPreview from './HoverPreview';
import { ArrowUpRight } from './Icons';
import styles from './Work.module.css';

interface Props {
  onOpen: (index: number) => void;
  previewEnabled: boolean;
}

export default function Work({ onOpen, previewEnabled }: Props) {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const [hover, setHover] = useState<number | null>(null);

  const visible = useMemo(
    () => projects.map((p, index) => ({ ...p, index })).filter((p) => filter === 'All' || p.category === filter),
    [filter],
  );

  const countFor = (f: 'All' | Category) =>
    f === 'All' ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <section id="work" className={`container ${styles.section}`}>
      <SectionHeader index="01" kicker="Selected work" title={<>Products<br />shipped</>}>
        <p className={styles.note}>
          Each project opens with a short motion explainer that walks through how the system works, scene by scene.
        </p>
        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`${styles.filter} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => { setFilter(f); setHover(null); }}
            >
              {f} <span className={styles.filterCount}>{countFor(f)}</span>
            </button>
          ))}
        </div>
      </SectionHeader>

      <div className={styles.list} onMouseLeave={() => setHover(null)}>
        {visible.map((p) => (
          <button
            key={`${filter}-${p.slug}`}
            type="button"
            className={`${styles.row} ${hover === p.index ? styles.rowActive : ''}`}
            onMouseEnter={() => setHover(p.index)}
            onFocus={() => setHover(p.index)}
            onClick={() => onOpen(p.index)}
          >
            <span className={styles.num}>{pad(p.index + 1)}</span>
            <span className={styles.name}>{p.name}</span>
            <span className={styles.meta}>{p.company} · {p.year}</span>
            <span className={styles.meta}>{p.stack.slice(0, 4).join(' / ')}</span>
            <span className={styles.arrow}><ArrowUpRight size={22} /></span>
          </button>
        ))}
      </div>

      <HoverPreview project={hover !== null ? projects[hover] : null} enabled={previewEnabled} />
    </section>
  );
}
