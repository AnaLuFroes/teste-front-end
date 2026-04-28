import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero} aria-label="Banner principal de promoções">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Venha conhecer nossas promoções</h1>
        <p className={styles.heroSub}>
          <strong>50% Off</strong> nos produtos
        </p>
        <a className={styles.heroCta} href="#produtos">
          Ver produto
        </a>
      </div>
    </section>
  );
}

export default Hero;
