import Link from 'next/link';
import styles from '../../../styles/Characters.module.css';

export default async function CharactersPage() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Characters</h1>
      <div className={styles.grid}>
        {data.results.map(character => (
          <Link href={`/characters/${character.id}`} key={character.id}>
            <div className={styles.card}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
