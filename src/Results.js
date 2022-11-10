import { Pet } from './Pet';

/**
 * @param {object} props
 * @param {PetInterface[]} props.pets
 * @return {JSX.Element}
 */
export const Results = ({ pets }) => {
  const isPetsEmpty = pets.length === 0;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
