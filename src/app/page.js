import styles from '../../styles/Characters.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rick and Morty</h1>
      <img src="/images/rick.jpg" alt="Rick and Morty" className={styles.homeImage} />
      <Link href="/characters">
        <button className={styles.button}>Go to Characters</button>
      </Link>
    </div>
  );
}

