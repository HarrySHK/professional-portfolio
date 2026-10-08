import { education } from '@/data/portfolio';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={`container ${styles.section}`}>
      {education.map((d, i) => (
        <div key={d.school} className={styles.row} data-reveal="">
          <span className="kicker">{i === 0 ? '(04) Education' : ''}</span>
          <div className={styles.degree}>
            <h3 className={styles.school}>{d.school}</h3>
            <span className={styles.name}>{d.degree}. CGPA [ {d.cgpa} ]</span>
            {d.status && (
              <span className={styles.status}><span className="square blink" />{d.status}</span>
            )}
          </div>
          <div className={styles.meta}>
            <span>{d.period}</span>
            <span>{d.location}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
