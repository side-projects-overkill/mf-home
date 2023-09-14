import React, { useState, useEffect } from 'react';
import { getAllCharacter } from './characters';
import { Link } from 'react-router-dom';

export default function HomeContent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacter().then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {characters.map((character) => (
        <div key={character.id}>
          <Link to={`/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <p></p>
                {character.name}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
