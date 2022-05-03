import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);
    };
    getCharacters();
  }, []);

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>loading characters ...</p>
      ) : (
        <ul>
          {characters.map((characters) => (
            <li key={character.id}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
