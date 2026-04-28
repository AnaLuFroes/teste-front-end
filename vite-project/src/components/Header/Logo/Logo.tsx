import styles from './Logo.module.scss';

function Logo() {
  return (
    <a href="/" className={styles.logo} aria-label="Econverse — Página inicial">
      <span className={styles.logoMark} aria-hidden="true">
        e
      </span>
      <span className={styles.logoText}>converse</span>
    </a>
  );
}

export default Logo;
