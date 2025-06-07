import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import styles from '../pages/Products.module.css'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Erro ao buscar produtos:', err));
  }, []);

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.productsContainerTitle}>Produtos disponíveis</h2>
      <div className={styles.productsContainerRow}>
        {products.map(product => (
          <div key={product.id} className={styles.productsContainerCol}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
