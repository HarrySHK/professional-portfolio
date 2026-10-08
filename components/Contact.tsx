'use client';

import { profile } from '@/data/portfolio';
import { useKarachiTime } from '@/hooks/useKarachiTime';
import styles from './Contact.module.css';

export default function Contact() {
  const time = useKarachiTime();

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.kicker}>(05) Contact</span>
        <h2 className={styles.title} data-reveal="">Have a system<br />to build?</h2>

        <a href={`mailto:${profile.email}`} className={styles.email}>{profile.email} ↗</a>

        <div className={styles.grid}>
          <a href={`tel:${profile.phone}`} className={styles.cell}>
            <span className={styles.cellLabel}>Phone</span>
            <span className={styles.cellValue}>{profile.phone}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.cell}>
            <span className={styles.cellLabel}>LinkedIn</span>
            <span className={styles.cellValue}>{profile.linkedinLabel} ↗</span>
          </a>
          <div className={styles.cell}>
            <span className={styles.cellLabel}>Based in</span>
            <span className={styles.cellValue}>{profile.location}</span>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className={styles.time}>Local time {time} PKT</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
