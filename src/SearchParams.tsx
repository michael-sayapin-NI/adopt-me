import { FunctionComponent, useState, useEffect, useDebugValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import changeAnimal from './actionCreators/changeAnimal';
import changeBreed from './actionCreators/changeBreed';
import changeTheme from './actionCreators/changeTheme';
import changeLocation from './actionCreators/changeLocation';
import { Animal, Pet, PetAPIResponse } from './APIResponsesTypes';
import Results from './Results';
import { StoreInit } from './Store';
import { useBreedList } from './useBreedList';

const ANIMALS: Animal[] = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams: FunctionComponent = () => {
  const animal = useSelector((state: StoreInit) => state.animal);
  const breed = useSelector((state: StoreInit) => state.breed);
  const location = useSelector((state: StoreInit) => state.location);
  const theme = useSelector((state: StoreInit) => state.theme);
  const dispatch = useDispatch();

  const [pets, setPets] = useState([] as Pet[]);
  const [breeds, status] = useBreedList(animal);

  useDebugValue(status);

  useEffect(() => {
    void requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => dispatch(changeLocation(e.target.value))}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              dispatch(changeAnimal(e.target.value as Animal));
            }}
            onBlur={(e) => {
              dispatch(changeAnimal(e.target.value as Animal));
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
            onBlur={(e) => {
              dispatch(changeBreed(e.target.value));
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="peru">Peru</option>
            <option value="lightblue">Light Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
