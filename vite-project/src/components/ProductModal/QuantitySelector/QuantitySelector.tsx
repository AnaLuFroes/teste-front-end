import styles from './QuantitySelector.module.scss';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  function handleDecrement() {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  }

  function handleIncrement() {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  }

  return (
    <div className={styles.quantity}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Diminuir quantidade"
        className={styles.btn}
      >
        −
      </button>
      <span className={styles.value} aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Aumentar quantidade"
        className={styles.btn}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
