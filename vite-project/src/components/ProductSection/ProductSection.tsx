import type { Product } from '../../types/Product';
import SectionTitle from './SectionTitle/SectionTitle';
import Tabs from './Tabs/Tabs';
import Carousel from './Carousel/Carousel';
import styles from './ProductSection.module.scss';

interface ProductSectionProps {
  title: string;
  products: Product[];
  showTabs?: boolean;
  onProductClick: (product: Product) => void;
}

function ProductSection({
  title,
  products,
  showTabs = false,
  onProductClick,
}: ProductSectionProps) {
  return (
    <section className={styles.vitrine}>
      <SectionTitle title={title} />
      {showTabs && <Tabs />}
      <Carousel products={products} onProductClick={onProductClick} />
    </section>
  );
}

export default ProductSection;
