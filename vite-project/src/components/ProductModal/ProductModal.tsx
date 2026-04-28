import { useEffect, useState } from 'react';
import type { Product } from '../../types/Product';
import Modal from '../Modal/Modal';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import { formatPrice } from '../../utils/formatPrice';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (product) {
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  return (
    <Modal
      isOpen={Boolean(product)}
      onClose={onClose}
      ariaLabel={`Detalhes do produto: ${product.productName}`}
    >
      <div className={styles.modal}>
        <div className={styles.imageBox}>
          <img
            src={product.photo}
            alt={product.productName}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/product.png';
            }}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{product.productName}</h2>
          <p className={styles.description}>{product.descriptionShort}</p>
          <div className={styles.price}>{formatPrice(product.price)}</div>

          <div className={styles.actions}>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <button type="button" className={styles.buyBtn}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;
