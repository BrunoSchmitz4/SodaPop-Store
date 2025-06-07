import React from 'react';
import styles from '../components/ProductCard.module.css'

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCardContainer}>
      <img src={product.image_url} className={styles.productCardContainer}alt={product.name} />
      <div className={styles.ProductCardBox}>
        <h3 className={styles.ProductCardName}>{product.name}</h3>
        <p className={styles.ProductCardDesc}>{product.description}</p>
        <p className={styles.ProductCardInfo}><strong>Origem:</strong> {product.origin_country}</p>
        <p className={styles.ProductCardInfo}><strong>Preço:</strong> R$ {product.price}</p>
        <button className={styles.ProductCardBtn} >Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
