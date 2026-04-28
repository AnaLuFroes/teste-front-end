import ShieldIcon from '../../icons/ShieldIcon';
import TruckIcon from '../../icons/TruckIcon';
import CardIcon from '../../icons/CardIcon';
import styles from './TopUtility.module.scss';

function TopUtility() {
  return (
    <div className={styles.topUtility}>
      <span className={styles.util}>
        <ShieldIcon className={styles.icon} />
        Compra 100% segura
      </span>
      <span className={styles.util}>
        <TruckIcon className={styles.icon} />
        Frete grátis acima de R$ 200
      </span>
      <span className={styles.util}>
        <CardIcon className={styles.icon} />
        Parcele suas compras
      </span>
    </div>
  );
}

export default TopUtility;
