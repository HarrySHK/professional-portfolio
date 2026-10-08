'use client';

import { profile } from '@/data/portfolio';
import { useKarachiTime } from '@/hooks/useKarachiTime';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const time = useKarachiTime();

  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        <span className="square" />
        <span>{profile.shortName}</span>
      </a>
      <div className={styles.links}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <span className={styles.clock}>Karachi {time}</span>
      <ThemeToggle />
    </nav>
  );
}
