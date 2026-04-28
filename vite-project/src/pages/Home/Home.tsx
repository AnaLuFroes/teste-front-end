import { useState } from 'react';
import type { Product } from '../../types/Product';
import { useProducts } from '../../hooks/useProducts';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import ProductSection from '../../components/ProductSection/ProductSection';
import Banners from '../../components/Banners/Banners';
import Brands from '../../components/Brands/Brands';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import ProductModal from '../../components/ProductModal/ProductModal';
import styles from './Home.module.scss';

function Home() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleProductClick(product: Product) {
    setSelectedProduct(product);
  }

  function handleModalClose() {
    setSelectedProduct(null);
  }

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Categories />

        {loading && (
          <div className={styles.loading}>Carregando produtos...</div>
        )}

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <ProductSection
              title="Produtos relacionados"
              products={products}
              showTabs
              onProductClick={handleProductClick}
            />
            <Banners />
            <ProductSection
              title="Produtos relacionados"
              products={products}
              onProductClick={handleProductClick}
            />
            <Banners />
            <Brands />
            <ProductSection
              title="Produtos relacionados"
              products={products}
              onProductClick={handleProductClick}
            />
          </>
        )}

        <Newsletter />
      </main>
      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default Home;
