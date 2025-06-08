import styles from '../header/Header.module.css'

export default function Header() {
    return (
        <nav className={styles.headerContainer}>
        <div className={styles.headerContainerContent}>
          <a className={styles.headerContainerTitle} href="/">Soda Pop Store</a>
          <div className={styles.headerContainerLinkList}>
            <a className={styles.headerContainerLinkItem} href="/">Home</a>
            <a className={styles.headerContainerLinkItem} href="/products">Produtos</a>
          </div>
        </div>
      </nav>
    )
} 