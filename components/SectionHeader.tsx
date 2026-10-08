import styles from './SectionHeader.module.css';

interface Props {
  index: string;
  kicker: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}

export default function SectionHeader({ index, kicker, title, children }: Props) {
  return (
    <div className={styles.header} data-reveal="">
      <div className={styles.titleBlock}>
        <span className="kicker">({index}) {kicker}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children && <div className={styles.aside}>{children}</div>}
    </div>
  );
}
