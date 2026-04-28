import PinIcon from '../../icons/PinIcon';
import HeartIcon from '../../icons/HeartIcon';
import UserIcon from '../../icons/UserIcon';
import BagIcon from '../../icons/BagIcon';
import styles from './HeaderIcons.module.scss';

function HeaderIcons() {
  return (
    <div className={styles.headerIcons}>
      <button className={styles.iconBtn} aria-label="Localização">
        <PinIcon className={styles.icon} />
      </button>
      <button className={styles.iconBtn} aria-label="Favoritos">
        <HeartIcon className={styles.icon} />
      </button>
      <button className={styles.iconBtn} aria-label="Conta">
        <UserIcon className={styles.icon} />
      </button>
      <button className={styles.iconBtn} aria-label="Sacola de compras">
        <BagIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default HeaderIcons;
