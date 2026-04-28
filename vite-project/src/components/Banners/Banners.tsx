import BannerCard from './BannerCard/BannerCard';
import styles from './Banners.module.scss';

function Banners() {
  return (
    <section className={styles.banners} aria-label="Banners de parceiros">
      <BannerCard
        title="Parceiros"
        text="Lorem ipsum dolor sit amet, consectetur"
        ctaLabel="Confira"
      />
      <BannerCard
        title="Parceiros"
        text="Lorem ipsum dolor sit amet, consectetur"
        ctaLabel="Confira"
      />
    </section>
  );
}

export default Banners;
