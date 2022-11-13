import { FunctionComponent } from 'react';

import { Pet as PetInterface } from './APIResponsesTypes';
import { Pet } from './Pet';

interface ResultsProps {
  pets: PetInterface[];
}

const Results: FunctionComponent<ResultsProps> = ({ pets }) => {
  const isPetsEmpty = pets.length === 0;

  return (
    <div className="search">
      {isPetsEmpty ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
