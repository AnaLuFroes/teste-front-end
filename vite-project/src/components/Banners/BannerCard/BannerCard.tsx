import styles from './BannerCard.module.scss';

interface BannerCardProps {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref?: string;
}

function BannerCard({
  title,
  text,
  ctaLabel,
  ctaHref = '#',
}: BannerCardProps) {
  return (
    <div className={styles.bannerCard}>
      <div className={styles.bannerContent}>
        <h3 className={styles.bannerTitle}>{title}</h3>
        <p className={styles.bannerText}>{text}</p>
        <a className={styles.bannerCta} href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default BannerCard;
