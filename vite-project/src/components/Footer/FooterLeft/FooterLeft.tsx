import InstagramIcon from '../../icons/InstagramIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import styles from './FooterLeft.module.scss';

function FooterLeft() {
  return (
    <div className={styles.footerLeft}>
      <div className={styles.footerLogo}>
        <span className={styles.brandMark} aria-hidden="true">
          e
        </span>
        <span>converse</span>
      </div>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.socials}>
        <a href="#" className={styles.socialIcon} aria-label="Instagram">
          <InstagramIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.socialIcon} aria-label="Facebook">
          <FacebookIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
          <LinkedInIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default FooterLeft;
