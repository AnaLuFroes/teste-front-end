import styles from './BrandCircle.module.scss';

function BrandCircle() {
  return (
    <div className={styles.brandCircle}>
      <span className={styles.brandLogo}>
        <span className={styles.brandMark} aria-hidden="true">
          e
        </span>
        <span>converse</span>
      </span>
    </div>
  );
}

export default BrandCircle;
