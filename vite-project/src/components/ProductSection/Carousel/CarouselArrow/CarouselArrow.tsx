import ArrowIcon from '../../../icons/ArrowIcon';
import styles from './CarouselArrow.module.scss';

interface CarouselArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

function CarouselArrow({ direction, onClick, disabled }: CarouselArrowProps) {
  const label = direction === 'left' ? 'Anterior' : 'Próximo';

  return (
    <button
      type="button"
      className={`${styles.arrow} ${styles[direction]}`}
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      <ArrowIcon className={styles.icon} />
    </button>
  );
}

export default CarouselArrow;
