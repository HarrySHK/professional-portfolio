import { marquee } from '@/data/portfolio';
import styles from './Marquee.module.css';

export default function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className="square" />
          </span>
        ))}
      </div>
    </div>
  );
}
