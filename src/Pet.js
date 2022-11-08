/**
 * @param {PetProps} props
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

/**
 * @typedef {object} PetProps
 * @property {string} name - Pet name
 * @property {string} animal - Pet type
 * @property {string} breed - Pet breed
 */