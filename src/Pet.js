import React from 'react';

/**
 * @param {string} name - The name of the Pet
 * @param {string} animal - The type of the Pet
 * @param {string} breed - The breed of the Pet
 * @return {React.DetailedReactHTMLElement<{}, HTMLElement>}
 * @constructor
 */
export const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};