import styles from '../pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeContainerTitle}>Bem-vindo à Soda Pop Store!</h1>
      <p className={styles.homeContainerDesc}>Snacks e bebidas do mundo todo para todo mundo! 🍭🥤</p>
    </div>
  );
}
