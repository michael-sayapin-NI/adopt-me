/**
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.animal
 * @param {string} props.breed
 * @return JSX.Element
 */
export const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
