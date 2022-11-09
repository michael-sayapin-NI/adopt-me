/**
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.animal
 * @param {string} props.breed
 * @param {string[]} props.images
 * @param {string} props.id
 * @param {string} props.location
 * @return JSX.Element
 */
export const Pet = ({ name, animal, breed, images, id, location }) => {
  const hero =
    images.length > 0
      ? images[0]
      : 'http://pet-images.dev-apis.com/pets/none.jpg';

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};
