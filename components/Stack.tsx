import { pad, stack } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import styles from './Stack.module.css';

export default function Stack() {
  return (
    <section id="stack" className={`container ${styles.section}`}>
      <SectionHeader index="03" kicker="Technical skills" title="The stack" />

      <div className={styles.grid}>
        {stack.map((group) => (
          <div key={group.title} className={styles.cell} data-reveal="">
            <div className={styles.head}>
              <h3 className={styles.title}>{group.title}</h3>
              <span className={styles.count}>{pad(group.items.length)}</span>
            </div>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item} className={`chip ${styles.chip}`}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
