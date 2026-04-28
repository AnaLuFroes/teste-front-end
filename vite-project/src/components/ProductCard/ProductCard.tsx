import type { Product } from '../../types/Product';
import {
  formatPrice,
  calculateInstallment,
  calculateOldPrice,
} from '../../utils/formatPrice';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  const oldPrice = product.oldPrice ?? calculateOldPrice(product.price);

  function handleBuy(event: React.MouseEvent) {
    event.stopPropagation();
    onClick(product);
  }

  return (
    <article
      className={styles.productCard}
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(product);
        }
      }}
    >
      <div className={styles.productImg}>
        <img
          src={product.photo}
          alt={product.productName}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/product.png';
          }}
        />
      </div>
      <h3 className={styles.productName}>{product.descriptionShort}</h3>
      <div className={styles.productPriceOld}>{formatPrice(oldPrice)}</div>
      <div className={styles.productPrice}>{formatPrice(product.price)}</div>
      <div className={styles.productInstallments}>
        ou {calculateInstallment(product.price)}
      </div>
      <div className={styles.productShipping}>Frete grátis</div>
      <button
        type="button"
        className={styles.productBuy}
        onClick={handleBuy}
      >
        COMPRAR
      </button>
    </article>
  );
}

export default ProductCard;
