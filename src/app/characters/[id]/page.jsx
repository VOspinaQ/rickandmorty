import Link from 'next/link';
import styles from '../../../../styles/Characters.module.css';

export default async function CharacterDetail({ params }) {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{character.name}</h1>
      <div className={styles.detailCard}>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Episodes: {character.episode.length}</p>
      </div>
      <Link href="/characters">
        <button className={styles.button}>Back to Characters</button>
      </Link>
    </div>
  );
}
