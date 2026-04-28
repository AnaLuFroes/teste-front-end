import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <>
      <div className={styles.titleWrap}>
        <span className={styles.line} />
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.line} />
      </div>
    </>
  );
}

export default SectionTitle;
