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

const Pet: FunctionComponent<PetProps> = ({
  id,
  name,
  animal,
  breed,
  images,
  location,
}) => {
  const hero =
    Array.isArray(images) && images.length > 0
      ? images[0]
      : 'http://pet-images.dev-apis.com/pets/none.jpg';

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img
          src={hero}
          alt={name}
          width="100"
          height="100"
          data-testid="thumbnail"
        />
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

export default Pet;
