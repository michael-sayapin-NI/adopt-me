import { Pet } from './Pet';

/**
 * @param {object} props
 * @param {PetInterface[]} props.pets
 * @return {JSX.Element}
 */
const Results = ({ pets }) => {
  const isPetsEmpty = pets.length === 0;

  return (
    <div>
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

/**
 * @typedef {object} PetInterface
 * @property {string} name
 * @property {string} animal
 * @property {string} breed
 * @property {string} city
 * @property {string} state
 * @property {string} id
 * @property {string[]} images
 */
