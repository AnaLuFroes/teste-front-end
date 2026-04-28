import BrandCircle from './BrandCircle/BrandCircle';
import styles from './Brands.module.scss';

const BRAND_COUNT = 5;

function Brands() {
  return (
    <section className={styles.brands} aria-label="Navegue por marcas">
      <h2 className={styles.title}>Navegue por marcas</h2>
      <div className={styles.row}>
        {Array.from({ length: BRAND_COUNT }).map((_, index) => (
          <BrandCircle key={index} />
        ))}
      </div>
    </section>
  );
}

export default Brands;
