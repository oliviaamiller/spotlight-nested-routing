import { Link, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CharacterDetail from './Detail';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    async function getCharacters() {
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
          {characters.map((character) => (
            <li key={character.id}>
              <Link to={`${url}/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:id`}>
          <CharacterDetail characters={characters} />
      </Route>
    </>
  );
}
