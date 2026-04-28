import { useState } from 'react';
import type { Product } from '../../../types/Product';
import ProductCard from '../../ProductCard/ProductCard';
import CarouselArrow from './CarouselArrow/CarouselArrow';
import styles from './Carousel.module.scss';

const ITEMS_PER_PAGE = 4;

interface CarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

function Carousel({ products, onProductClick }: CarouselProps) {
  const [startIndex, setStartIndex] = useState<number>(0);

  const totalPages = Math.max(1, products.length - ITEMS_PER_PAGE + 1);
  const visibleProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  function handlePrev() {
    setStartIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setStartIndex((prev) => Math.min(totalPages - 1, prev + 1));
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.carouselWrap}>
      <CarouselArrow
        direction="left"
        onClick={handlePrev}
        disabled={startIndex === 0}
      />
      <div className={styles.carousel}>
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${startIndex + index}`}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>
      <CarouselArrow
        direction="right"
        onClick={handleNext}
        disabled={startIndex >= totalPages - 1}
      />
    </div>
  );
}

export default Carousel;
