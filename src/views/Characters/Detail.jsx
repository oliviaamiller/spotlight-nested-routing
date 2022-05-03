import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CharacterDetail({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const selectedCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(selectedCharacter);
  }, [id]);

  return (
    <>
      <div>
        <p>{character.name}</p>
        <img src={character.image} alt={`Rick and Morty image of character ${character.name}`} />
      </div>
    </>
  );
}
