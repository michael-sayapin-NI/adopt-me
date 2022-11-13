import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Animal } from './APIResponsesTypes';

interface PetProps {
  id: number;
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
}

export const Pet: FunctionComponent<PetProps> = ({
  id,
  name,
  animal,
  breed,
  images,
  location,
}) => {
  const hero =
    images.length > 0
      ? images[0]
      : 'http://pet-images.dev-apis.com/pets/none.jpg';

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} width="100" height="100" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};
